/* Backbone.js views */

/*globals MyApp, Backbone, $, _ */

"use strict";
MyApp.Views = {
	TopSitesView : Backbone.View.extend({
		id : "inlineGraph1",
		title : "Top visited sites",
		initialize : function () {
			this.render();
		},
		_data : function () {
			var data = [[
				['google.com', 12],
				['facebook.com', 9],
				['hackernews', 14],
				['en.wikipedia.com', 16],
				['twitter.com', 7],
				['Yahoo!', 9]
			]];
			return data;
		},
		render : function () {

			var that = this,
				plot = $.jqplot(that.id, that._data(), {
					title : that.title,
					textColor : "#ff0000",
					grid : {
						drawGridLines	: false,
						shadow			: false,
						borderWidth		: 0,
						background		: '#efefef',
						borderColor		: '#fffff'
					},
					seriesDefaults: {
						// Make this a pie chart.
						renderer: $.jqplot.PieRenderer,
						rendererOptions : {
							showDataLabels : true
						}
					},
					legend : {
						show			: true,
						location		: 'e'
					}
				});

		}
	}),
	PagesPerTimeView : Backbone.View.extend({
		id : "bigNumPlot",
		className : "offset2 span4 small",
		title : "Pages visited per minute",
		_data : function () {
			return [[3, 7, 9, 1, 4, 6, 8, 2, 5]];
		},
		initialize : function () {
			console.log("Bind event here");
			this.render();
		},
		render : function () {
			var plot = $.jqplot(this.id, this._data(), {
				title : this.title,
				grid : {
					drawGridLines	: false,
					shadow			: false,
					borderWidth		: 0,
					background		: '#efefef',
					borderColor		: '#fffff'
				},
				axes : {
					xaxis : {
						renderer			: $.jqplot.CategoryAxisRenderer,
						showTickMarks		: false,
						showTicks			: false
					},
					yaxis : {
						showTickMarks : true,
						showTicks : true
					}
				}
			});
			$("div#bigNumGraph span.num").html(_.last(this._data()[0]));
		}
	}),
	ScatterPlotView : Backbone.View.extend({
		id : "inlineGraph2",
		title : "Browsing activity",
		_data : function () {
			var data = this.model.get('punchcard'),
				vals =  _.values(data),
				ret = [];
			_.each(vals, function(val){
				ret.push( _.values(val));
			});
			console.log("Ret :", ret);
			return ret;
		},
		initialize : function () {
			console.log("Bind event here");
			this.render();
		},
		render : function () {
			var plot = $.jqplot(this.id, this._data(), {
				title : this.title,
				seriesDefaults:{showMarker:true, showLine:false},
				grid : {
					drawGridLines		: true,
					shadow				: false,
					borderWidth			: 0,
					background			: '#efefef',
					borderColor			: '#fffff'
				},
				axes : {
					xaxis : {
						renderer		: $.jqplot.CategoryAxisRenderer
					},
					yaxis : {
					}
				}
			});
		}
	})

};
