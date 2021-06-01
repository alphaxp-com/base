#!/usr/bin/env bash

function _gcloud() {
  . .env
  if [[ ! -d "./bin/google-cloud-sdk" ]]; then
    curl -o ./bin/google-cloud-sdk.tar.gz https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-342.0.0-darwin-arm.tar.gz
    openssl dgst -sha256 ./bin/google-cloud-sdk.tar.gz | cut -d ' ' -f 2 | grep -xq '^00adbaea088ccfdd2fe1eba17f6dd36902a819bdcfbc6dcc5e58c743d6d4af33$';
    if [[ test $? -eq 0 ]]; then
      tar -xvzf ./bin/google-cloud-sdk.tar.gz -C ./bin &&
        ./bin/google-cloud-sdk/install.sh &&
        ./bin/google-cloud-sdk/bin/gcloud init
      gcloud config set disable_usage_reporting false
      gcloud components install beta
    fi
    rm ./bin/google-cloud-sdk.tar.gz
  fi
  gcloud components update
}

function install() {
  _gcloud
}

function update() {
  _gcloud
}

function help() {
  echo "setup [install, update]"
}

case "$1" in
  'install')  install     ;;
  'update')   update      ;;
  *)          help        ;;
esac
