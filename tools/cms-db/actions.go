package main

import (
	cli "github.com/urfave/cli/v2"
)

type AppAction func(Values) error

func (a AppAction) AsActionFunc() cli.ActionFunc {
	return func(c *cli.Context) error {
		return a(c)
	}
}

type Values interface {
	String(string) string
}

type Actions struct {
	Build AppAction
}

func NewApp(a Actions) *cli.App {
	return &cli.App{
		Name: "cms-db",
		Commands: []*cli.Command{
			&cli.Command{
				Name:   "build",
				Action: a.Build.AsActionFunc(),
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:  "dir",
						Usage: "directory of doc content: html, org, and yaml.",
					},
				},
			},
		},
	}
}
