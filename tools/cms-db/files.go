package main

import (
	"io/ioutil"
	"os"
)

func FileToString(name string) string {
	bin, err := ioutil.ReadFile(name)
	if err != nil {
		return ""
	}
	return string(bin)
}

func FileExists(file string) bool {
	_, err := os.Stat(file)
	if os.IsNotExist(err) {
		return false
	}
	return true
}
