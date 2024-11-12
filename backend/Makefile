watch:
	@echo "Start building..."
	@cargo watch -x run

dev:
	@echo "Start building..."
	@cargo build
	@echo "Start testing..."
	@cargo run

build-release:
	@echo "Start building..."
	@cargo build --release
	@echo "Start running..."
	@cargo run --release

docker-build:
	@echo "Start building..."
	@docker build -t rusteze .

docker-run:
	@echo "Start running..."
	@docker run -p 8000:8000 rusteze