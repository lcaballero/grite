// Code generated by "jade.go"; DO NOT EDIT.

package main

import (
	"bytes"
	"io"

	"github.com/Joker/hpp"
)

const (
	index__0 = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Forced Evolution</title><link href="/css/reset.css" rel="stylesheet"/><link href="/css/ul.css" rel="stylesheet"/><link href="/css/main.css" rel="stylesheet"/><script src="/js/lib/axios.min.js"></script><script src="/js/lib/voca.js"></script><script src="/js/lib/keyboard.min.js"></script><script src="/js/hot-reload.js"></script><script src="/js/data-load.js"></script><script src="/js/main.js"></script><script src="/js/data.js"></script></head><body><div class="main"><div class="help closed"><div class="modal frame"><h1>Help</h1><article><dl><dt>?</dt><dd>Help</dd></dl></article></div></div><div class="strip"><div class="plane"><ul><li><b>Enter</b><span>Traverse</span></li><li><b>Space</b><span>Preview</span></li></ul></div></div><div class="search closed"><div class="plane"><dl class="cli"><dt class="prompt"><pre>:</pre></dt><dd class="cmd"><pre></pre></dd></dl></div></div><div class="window layout half"></div></div></body></html>`
)

func Jade_index(buffer *bytes.Buffer) {

	r, w := io.Pipe()
	go func() {
		buffer := &WriterAsBuffer{w}

		buffer.WriteString(index__0)

		w.Close()
	}()
	hpp.Format(r, buffer)
}
