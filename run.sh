#!/bin/bash

DST=".dist"
BLD=".build"

rm-bak() {
    find . -type f -name "*.*~" | xargs rm
}

clean() {
    rm -rf "$DST" "$BLD"
}

build() {
    mkdir -p "$DST"
    rsync -av --exclude=".*" ./src/web/assets/ "$DST" > /dev/null

    local p=$(pwd)
    local file="$(echo $1 | sed -e "s,$p/src,,")"

    cat <<EOF > "$DST/updated.txt"
{
  "date": $(date +%s),
  "files": [
    "$file"
  ]
}
EOF

}

watch-src() {
    fswatch --exclude=".*#.*" src | xargs -n1 -I{} ./run.sh build {}
}

compile() {
    (cd tools/hq && go generate ./... && go install)
    (cd tools/cms-db && go generate ./... && go install)
}

convert() {
    e --file "$1.org" \
      --chdir "$BLD/web/docs" \
      --batch --kill -Q \
      --eval "$(< export.el)"
}

convert-to-html() {
    local file="$1"
    export EXPORT_NAME="$file"
    convert "$file"
    plain-hq "$file"
    untangle "$file"
}

plain-hq() {
    hq plain \
       --in "$BLD/web/docs/$1.html" \
       --out "$BLD/web/docs/$1.html"
}

untangle() {
    e ".build/web/docs/$1.org" --batch -f org-babel-tangle
}

to-html() {
    clean
    build
    mkdir "$BLD"
    cp -r ./src/web .build

    convert-to-html "index"
    convert-to-html "tools.characters"
    convert-to-html "tools.story-types"
    convert-to-html "recent"
    convert-to-html "favorites"
    convert-to-html "q1"
    convert-to-html "dev-tools"

    # (
    #     cd .build && \
    #         hq transform \
    #            --in index.tmpl.html \
    #            --out ../.dist/index.html
    # )

    cms-db build --dir .build > \
        .dist/cms-db.json

    run-jaded
    cp src/web/index.html.bak .dist/index.html

    rm-bak
}

run-jaded() {
    local dir=$(pwd)
    (
        cd src && \
            jade -stdbuf -fmt \
                 -pkg main \
                 -basedir web \
                 index.pug > /dev/null 2>&1 && \
            go install && \
            jaded > web/index.html.pre &&
            sed -E '/^$/d' web/index.html.pre > web/index.html.bak
    )
}



"$@"
