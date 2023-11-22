.PHONY: deploy
deploy:
	ENV=production docker-compose up --build

.PHONY: development
development:
	ENV=development docker-compose up --build
