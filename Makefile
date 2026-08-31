# ============================================================
# Eri Ife website — Vite + React, deployed to Cloudflare Workers
# via Wrangler (static assets, SPA routing — see wrangler.toml).
#
# Run `make` or `make help` for the list of targets.
# ============================================================

PKG  := pnpm
DIST := dist

.DEFAULT_GOAL := help

.PHONY: help install dev build preview deploy sync-music sync-music-apply env clean clean-all

## help: show this list of targets
help:
	@echo "Eri Ife website — available targets:"
	@echo
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/^## /  make /' | awk -F': ' '{printf "%-24s %s\n", $$1, $$2}'
	@echo

## install: install dependencies
install:
	$(PKG) install

## dev: run the local dev server (http://localhost:5173)
dev: node_modules
	$(PKG) dev

## build: production build into ./dist
build: node_modules
	$(PKG) build

## preview: build, then serve ./dist through Wrangler exactly as Cloudflare will
preview: build
	$(PKG) exec wrangler dev

## deploy: build and publish to Cloudflare Workers
deploy: build
	$(PKG) exec wrangler deploy

## sync-music: pull the latest discography from Spotify into src/data/spotify.generated.ts
sync-music: node_modules env
	$(PKG) fetch-spotify

# Only needed once — content.ts already re-exports the generated file.
## sync-music-apply: sync-music, and point content.ts at the generated file
sync-music-apply: node_modules env
	$(PKG) fetch-spotify --apply

## env: create .env from .env.example if it doesn't exist yet
env:
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "Created .env from .env.example — fill in your Spotify + EmailJS keys."; \
	fi

## clean: remove build output
clean:
	rm -rf $(DIST) .wrangler/tmp

## clean-all: remove build output and node_modules
clean-all: clean
	rm -rf node_modules

# Install deps on demand if node_modules is missing or stale.
node_modules: package.json pnpm-lock.yaml
	$(PKG) install
	@touch node_modules
