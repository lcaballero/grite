package main

import (
	"fmt"
	"io/fs"
	"log"
	"path/filepath"
	"strings"

	yaml "gopkg.in/yaml.v2"
)

func Build(v Values) error {
	root := v.String("dir")
	entries := Entries{}
	fn := func(path string, d fs.FileInfo, err error) error {
		orgFile := path
		if d.IsDir() {
			return nil
		}
		if !strings.HasSuffix(orgFile, ".org") {
			return nil
		}
		noExt := strings.TrimSuffix(orgFile, ".org")
		frontMatterFile := noExt + ".yaml"
		htmlFile := noExt + ".html"
		hasFrontMatter := FileExists(frontMatterFile)
		hasHtml := FileExists(htmlFile)
		e := Entry{}
		if hasFrontMatter {
			yamlText := FileToString(frontMatterFile)
			err := yaml.Unmarshal([]byte(yamlText), &e)
			if err != nil {
				log.Fatalf("error: %v", err)
			}
			e.Yaml = yamlText
		}
		if hasHtml {
			e.Html = FileToString(htmlFile)
		}
		e.File = strings.TrimPrefix(path, ".build/")
		e.Org = FileToString(orgFile)
		e.Name = strings.TrimSuffix(e.File, ".org")
		entries = append(entries, e)
		return nil
	}
	err := filepath.Walk(root, filepath.WalkFunc(fn))

	sessionFile := filepath.Join(root, "session.yaml")
	hasSessionFile := FileExists(sessionFile)
	session := Session{}
	if hasSessionFile {
		yamlText := FileToString(sessionFile)
		err := yaml.Unmarshal([]byte(yamlText), &session)
		if err != nil {
			log.Fatalf("error: %v", err)
		}
	}

	cmsdb := CMSDB{
		Entries: entries,
		Session: session,
		Edges:   LoadEdges(root),
	}
	fmt.Println(cmsdb.JSON())
	return err
}

func LoadEdges(root string) []Edge {
	edgesFile := filepath.Join(root, "edges.yaml")
	hasEdgeFile := FileExists(edgesFile)
	edges := CMSDB{}
	if hasEdgeFile {
		yamlText := FileToString(edgesFile)
		//fmt.Println(yamlText)
		err := yaml.Unmarshal([]byte(yamlText), &edges)
		if err != nil {
			log.Fatalf("error: %v", err)
		}
	}
	return edges.Edges
}
