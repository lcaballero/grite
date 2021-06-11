package main

import (
	"io/ioutil"
	"os"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

func Plain(v Values) error {
	in := v.String("in")
	out := v.String("out")

	file, err := os.Open(in)
	if err != nil {
		return err
	}
	doc, err := goquery.NewDocumentFromReader(file)
	if err != nil {
		return err
	}
	doc.Find(".org-src-container").Each(func(i int, s *goquery.Selection) {
		s.Remove()
	})
	doc.Find("*").Each(func(i int, s *goquery.Selection) {
		s.RemoveAttr("class")
		s.RemoveAttr("id")
		//fmt.Println(s.Text())
		//s.Remove()
	})
	html, err := doc.Find("body").Html()
	if err != nil {
		return err
	}
	html = strings.TrimSpace(html)
	err = ioutil.WriteFile(out, []byte(html), 0644)
	if err != nil {
		return err
	}
	return nil
}
