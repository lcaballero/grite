package main

import (
	"io/ioutil"
	"os"

	"github.com/PuerkitoBio/goquery"
)

func Transform(v Values) error {
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
	doc.Find("[include]").Each(func(i int, s *goquery.Selection) {
		file, _ := s.Attr("include")

		bin, _ := ioutil.ReadFile(file)
		h := string(bin)

		//fmt.Println("h:", h)

		s.AfterHtml(h)
		s.Remove()
	})
	html, err := goquery.OuterHtml(doc.Selection) // .Html()
	if err != nil {
		return err
	}
	err = ioutil.WriteFile(out, []byte(html), 0644)
	if err != nil {
		return err
	}
	return nil
}
