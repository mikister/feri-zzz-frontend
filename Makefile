.DEFAULT_GOAL := run

.PHONY: setup run build


setup:
	npm install

run:
	npm run-script start

build:
	npm run-script build

format:
	npm run-script format
