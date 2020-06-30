class CanvasTransformer extends CanvasBubble {
	constructor(width, height) {
		super(".layer-transforms", width, height);

		this.canvas = InkCanvas2D.createInstance(this.surface, width, height);
		this.originLayer = this.canvas.createLayer();

		this.strokeRenderer = new StrokeRenderer2D(this.canvas);
	}

	draw(strokes) {
		let dirtyArea;

		this.originLayer.clear();

		strokes.forEach(stroke => {
			this.strokeRenderer.draw(stroke);
			this.strokeRenderer.blendStroke(this.originLayer);

			dirtyArea = this.strokeRenderer.strokeBounds.union(dirtyArea);
		});

		this.canvas.blend(this.originLayer, {mode: BlendMode.COPY, rect: dirtyArea});
	}

	refresh(transform) {
		this.canvas.clear();
		this.canvas.blend(this.originLayer, {transform: transform});
	}
}