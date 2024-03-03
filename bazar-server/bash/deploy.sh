#!/bin/bash

# Processando argumentos passados para o script
while [ $# -gt 0 ]; do
  if [[ $1 == *=* ]]; then
    declare $(echo $1 | cut -d= -f1)="$(echo $1 | cut -d= -f2-)"
  fi
  shift
done

echo "Building in MODE: $mode"

REACT_APP_DIR="../front"
NESTJS_APP_DIR="../bazar-server"
PUBLIC_DIR="$NESTJS_APP_DIR/public"

echo "Iniciando o build do React"

cd $REACT_APP_DIR
npm install
npm run build --mode=$mode

echo "Copiando arquivos de build para o diretório público do NestJS..."
mkdir -p $PUBLIC_DIR
rm -rf $PUBLIC_DIR/*
cp -R dist/* $PUBLIC_DIR

echo "Iniciando o servidor NestJS com PM2..."
cd $NESTJS_APP_DIR
npm install

pm2 restart bazar-server

echo "Deploy completo."