install:
		npm ci

publish:
		npm publish --dry-run

lint:
		npx eslint .

link:
		npm link --dry-run

test:
		npm test

test-coverage:
		npm test -- --coverage --coverage-provider=v8

.PHONY: test
