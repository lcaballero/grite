#!/bin/bash

DST="./.dist"

build() {
    clean && mkdir -p "$DST"
    rsync -av --exclude=".*" ./src/ "$DST" > /dev/null

    local p=$(pwd)
    local file="$(echo $1 | sed -e "s,$p/src,,")"
    echo "$p $file" > .changes.txt

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

clean() {
    rm -rf "$DST"
}

"$@"
