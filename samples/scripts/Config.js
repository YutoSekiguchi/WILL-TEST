let context = new PathPointContext();

let config = {
	tools: {
		/* ******* VECTOR TOOLS ******* */
		pen: {
			brush: BrushPalette.circle,

			dynamics: {
				size: {
					value: {
						min: 1,
						max: 3.2
					},

					velocity: {
						min: 5,
						max: 4000,

						remap: v => ValueTransformer.sigmoid(v, 0.62, true)
						// remap: "will://generic/action-remap/Sigmoid?p=0.62&reverse=true"
					},

					pressure: {
						min: 0.19,
						max: 0.88
					}
				}
			}
		},

		felt: {
			brush: BrushPalette.circle,

			dynamics: {
				size: {
					value: {
						min: 1.03 - 0.2,
						max: 2.43
						// remap: v => ValueTransformer.periodic(v, 3)
					},

					velocity: {
						min: 33,
						max: 628,
						// remap: v => ValueTransformer.periodic(v, 3, true)
						remap: v => ValueTransformer.reverse(v)
					}
				}
			}
		},

		brush: {
			brush: BrushPalette.circle,

			dynamics: {
				size: {
					value: {
						min: 3.4,
						max: 17.2,

						remap: v => ValueTransformer.power(v, 1.19)
					},

					velocity: {
						min: 182,
						max: 3547
					}
				},

				rotation: {
					dependencies: [SensorChannel.Type.ROTATION, SensorChannel.Type.AZIMUTH]
				},

				scaleX: {
					dependencies: [SensorChannel.Type.RADIUS_X, SensorChannel.Type.ALTITUDE],

					value: {
						min: 1,
						max: 3
					}
				},

				scaleY: {
					dependencies: [SensorChannel.Type.RADIUS_Y],

					value: {
						min: 1,
						max: 3
					}
				},

				offsetX: {
					dependencies: [SensorChannel.Type.ALTITUDE],

					value: {
						min: 2,
						max: 5
					}
				}
			},

			statics: {
				alpha: 0.7
			}
		},

		marker: {
			brush: BrushPalette.circle,
			blendMode: BlendMode.DESTINATION_OVER,

			statics: {
				size: 3.4,
				alpha: 0.7
			}
		},

		basic: {
			brush: BrushPalette.circle,

			dynamics: {
				size: {
					value: {
						min: 1,
						max: 3.2
					},

					velocity: {
						min: 100,
						max: 4000
					},

					pressure: {
						min: 0.2,
						max: 0.8
					}
				}
			},

			statics: {},

			pipeline: {
				// excludedPipelineStages: [PipelineStage.SMOOTHER, PipelineStage.POLYGON_MERGER, PipelineStage.POLYGON_SIMPLIFIER],
				excludedPipelineStages: [PipelineStage.POLYGON_MERGER, PipelineStage.POLYGON_SIMPLIFIER],
				lastPipelineStage: PipelineStage.CONVEX_HULL_CHAIN_PRODUCER
			}
		},

		/* ******* RASTER TOOLS ******* */
		pencil: {
			brush: BrushPalette.pencil,

			dynamics: {
				size: {
					value: {
						min: 5,
						max: 10
					},

					velocity: {
						min: 80,
						max: 1400,

						remap: v => ValueTransformer.reverse(v)
					}
				},

				alpha: {
					value: {
						min: 0.05,
						max: 0.2
					},

					velocity: {
						min: 80,
						max: 1400
					}
				},

				rotation: {
					dependencies: [SensorChannel.Type.ROTATION, SensorChannel.Type.AZIMUTH]
				},

				scaleX: {
					dependencies: [SensorChannel.Type.RADIUS_X, SensorChannel.Type.ALTITUDE],

					value: {
						min: 1,
						max: 3
					}
				},

				scaleY: {
					dependencies: [SensorChannel.Type.RADIUS_Y],

					value: {
						min: 1,
						max: 3
					}
				},

				offsetX: {
					dependencies: [SensorChannel.Type.ALTITUDE],

					value: {
						min: 2,
						max: 5
					}
				}
			}
		},

		waterBrush: {
			brush: BrushPalette.waterBrush,

			dynamics: {
				size: {
					value: {
						min: 28,
						max: 32,

						remap: v => ValueTransformer.power(v, 3)
					},

					velocity: {
						min: 38,
						max: 1500
					}
				},

				alpha: {
					value: {
						min: 0.02,
						max: 0.25,

						remap: v => ValueTransformer.power(v, 3)
					},

					velocity: {
						min: 38,
						max: 1500,

						remap: v => ValueTransformer.power(v, 3, true)
					}
				},

				rotation: {
					dependencies: [SensorChannel.Type.ROTATION, SensorChannel.Type.AZIMUTH]
				},

				scaleX: {
					dependencies: [SensorChannel.Type.RADIUS_X, SensorChannel.Type.ALTITUDE],

					value: {
						min: 1,
						max: 3
					}
				},

				scaleY: {
					dependencies: [SensorChannel.Type.RADIUS_Y],

					value: {
						min: 1,
						max: 3
					}
				},

				offsetX: {
					dependencies: [SensorChannel.Type.ALTITUDE],

					value: {
						min: 2,
						max: 5
					}
				}
			}
		},

		inkBrush: {
			brush: BrushPalette.inkBrush,
			// brush: BrushPalette.circle,

			dynamics: {
				size: {
					value: {
						min: 5,
						max: 28
					},

					velocity: {
						min: 50,
						max: 2000
					}
				},

				rotation: {
					dependencies: [SensorChannel.Type.ROTATION, SensorChannel.Type.AZIMUTH]
				},

				scaleX: {
					dependencies: [SensorChannel.Type.RADIUS_X, SensorChannel.Type.ALTITUDE],

					value: {
						min: 1,
						max: 3
					}
				},

				scaleY: {
					dependencies: [SensorChannel.Type.RADIUS_Y],

					value: {
						min: 1,
						max: 3
					}
				},

				offsetX: {
					dependencies: [SensorChannel.Type.ALTITUDE],

					value: {
						min: 2,
						max: 5
					}
				}
			},

			statics: {
				alpha: 1
			}
		},

		rainbowBrush: {
			brush: BrushPalette.rainbowBrush,

			dynamics: {
				size: {
					value: {
						min: 5,
						max: 28
					},

					velocity: {
						min: 50,
						max: 2000
					}
				},

				red: {
					resolve: () => Math.ceil(Math.random() * 255)
				},

				green: {
					resolve: () => Math.ceil(Math.random() * 255)
				},

				blue: {
					resolve: () => Math.ceil(Math.random() * 255)
				},

				alpha: {
					value: {
						min: 0.1,
						max: 0.6
					},

					velocity: {
						min: 50,
						max: 2000
					}
				},

				rotation: {
					dependencies: [SensorChannel.Type.ROTATION, SensorChannel.Type.AZIMUTH]
				},

				scaleX: {
					dependencies: [SensorChannel.Type.RADIUS_X, SensorChannel.Type.ALTITUDE],

					value: {
						min: 1,
						max: 3
					}
				},

				scaleY: {
					dependencies: [SensorChannel.Type.RADIUS_Y],

					value: {
						min: 1,
						max: 3
					}
				},

				offsetX: {
					dependencies: [SensorChannel.Type.ALTITUDE],

					value: {
						min: 2,
						max: 5
					}
				}
			}
		},

		crayon: {
			brush: BrushPalette.crayon,

			dynamics: {
				size: {
					value: {
						min: 18,
						max: 28
					},

					velocity: {
						min: 10,
						max: 1400
					}
				},

				alpha: {
					value: {
						min: 0.1,
						max: 0.6
					},

					velocity: {
						min: 10,
						max: 1400,
						remap: v => ValueTransformer.reverse(v)
					}
				},

				rotation: {
					dependencies: [SensorChannel.Type.ROTATION, SensorChannel.Type.AZIMUTH]
				},

				scaleX: {
					dependencies: [SensorChannel.Type.RADIUS_X, SensorChannel.Type.ALTITUDE],

					value: {
						min: 1,
						max: 3
					}
				},

				scaleY: {
					dependencies: [SensorChannel.Type.RADIUS_Y],

					value: {
						min: 1,
						max: 3
					}
				},

				offsetX: {
					dependencies: [SensorChannel.Type.ALTITUDE],

					value: {
						min: 2,
						max: 5
					}
				}
			}
		},

		eraser: undefined,

		eraserVector: {
			brush: BrushPalette.circle,
			intersector: new Intersector(Intersector.Mode.PARTIAL_STROKE),

			dynamics: {
				size: {
					value: {
						min: 16,
						max: 24
					},

					velocity: {
						min: 720,
						max: 3900
					}
				}
			},

			statics: {
				red: 255,
				green: 255,
				blue: 255,
				alpha: 0.5
			}
		},

		eraserRaster: {
			brush: BrushPalette.eraserGL,
			blendMode: BlendMode.DESTINATION_OUT,

			dynamics: {
				size: {
					value: {
						min: 8,
						max: 112
					},

					velocity: {
						min: 720,
						max: 3900
					}
				}
			},

			statics: {
				red: 255,
				green: 255,
				blue: 255,
				alpha: 1
			}
		},

		eraserStroke: {
			brush: BrushPalette.circle,
			blendMode: BlendMode.DESTINATION_OUT,
			intersector: new Intersector(Intersector.Mode.PARTIAL_STROKE),

			dynamics: {
				size: {
					value: {
						min: 16,
						max: 64
					},

					velocity: {
						min: 720,
						max: 3900
					}
				}
			},

			statics: {
				red: 255,
				green: 255,
				blue: 255,
				alpha: 1
			}
		},

		eraserWholeStroke: {
			brush: BrushPalette.basic,
			intersector: new Intersector(Intersector.Mode.WHOLE_STROKE),

			statics: {
				size: 3,
				red: 255,
				green: 255,
				blue: 255,
				alpha: 0.5
			}
		},

		selector: {
			brush: BrushPalette.circle,
			selector: new Selector(Selector.Mode.PARTIAL_STROKE),

			statics: {
				size: 2,
				red: 0,
				green: 151,
				blue: 212,
				alpha: 1
			}
		},

		selectorWholeStroke: {
			brush: BrushPalette.circle,
			selector: new Selector(Selector.Mode.WHOLE_STROKE),

			statics: {
				size: 2,
				red: 0,
				green: 151,
				blue: 212,
				alpha: 1
			}
		}
	},

	pipeline: {
		// movingAverageWindowSize: 15,
		// errorThreshold: 0.15,
		// epsilon: 0.1
	},

	getBrush(toolID) {
		return this.tools[toolID].brush;
	},

	getSize(toolID) {
		let size;

		if (this.tools[toolID].statics)
			size = this.tools[toolID].statics.size;

		if (isNaN(size)) {
			size = this.tools[toolID].dynamics.size.value;
			size = {min: size.min, max: size.max};
		}
		else
			size = {min: size, max: size};

		return size;
	},

	getOptions(sample, toolID, color) {
		let toolConfig = this.tools[toolID];

		console.log("おーい", context)
		context.reset(sample, toolConfig.brush, color, toolConfig.dynamics, toolConfig.statics)

		console.log(context.color)
		// context.color.red = 200;

		return {
			strokeRenderer: {
				brush: toolConfig.brush,
				color: context.color,
				blendMode: toolConfig.blendMode || BlendMode.SOURCE_OVER
			},

			inkBulder: Object.assign({brush: toolConfig.brush}, {
				layout: context.layout,
				pathPointCalculator: context.calculate.bind(context),
				pathPointProps: context.statics,
				concatSegments: (app.type == app.Type.RASTER && toolConfig.brush instanceof Brush2D)
			}, config.getPipelineOptions(toolConfig))
		};
	},

	getPipelineOptions(toolConfig) {
		let options = Object.assign({}, config.pipeline, toolConfig.pipeline);

		return options;
	}
};
