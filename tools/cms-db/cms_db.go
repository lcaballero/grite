package main

import "encoding/json"

type CMSDB struct {
	Session Session `json:"session"`
	Entries Entries `json:"entries"`
	Edges   []Edge  `json:"edges"`
}

func (e CMSDB) JSON() string {
	bin, err := json.MarshalIndent(&e, "", "  ")
	if err != nil {
		return "[]"
	}
	return string(bin)
}

type Edge struct {
	Next string `json:"next"`
	Prev string `json:"prev"`
	Name string `json:"name"`
}

type Session struct {
	Name    string   `json:"name"`
	Crumbs  []string `json:"crumbs"`
	Layout  string   `json:"layout"` // halves, thrids, full
	Filters Filters  `json:"filters"`
}

type Filters struct {
	Includes []string `json:"includes"`
	Excludes []string `json:"excludes"`
}

type Entries []Entry

type Entry struct {
	Html string   `json:"html"`
	Org  string   `json:"org"`
	Yaml string   `json:"yaml"`
	File string   `json:"file"`
	Name string   `json:"name"`
	Tags []string `json:"tags"`
}
