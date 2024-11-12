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