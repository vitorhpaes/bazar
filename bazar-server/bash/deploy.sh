#!/bin/bash

while [ $# -gt 0 ]; do
  if [[ $1 == *=* ]]; then
    declare $(echo $1 | cut -d= -f1)="$(echo $1 | cut -d= -f2-)"
  fi
  shift
done

echo "Building in MODE: $mode"

REACT_APP_DIR="../front"
NESTJS_APP_DIR="../"
PUBLIC_DIR="$NESTJS_APP_DIR/public"

echo "Iniciando o build do React"

cd $REACT_APP_DIR
yarn install
yarn build --mode=$mode

echo "Copiando arquivos de build para o diretório público do NestJS..."
mkdir -p $PUBLIC_DIR
rm -rf $PUBLIC_DIR/*
cp -R dist/* ../$PUBLIC_DIR

echo "Iniciando o servidor NestJS..."
cd ../$NESTJS_APP_DIR
yarn install
yarn start

echo "Deploy completo."