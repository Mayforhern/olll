"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stats-gl";
exports.ids = ["vendor-chunks/stats-gl"];
exports.modules = {

/***/ "(ssr)/./node_modules/stats-gl/dist/main.cjs":
/*!*********************************************!*\
  !*** ./node_modules/stats-gl/dist/main.cjs ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst panel = __webpack_require__(/*! ./panel.cjs */ \"(ssr)/./node_modules/stats-gl/dist/panel.cjs\");\nconst _Stats = class _Stats2 {\n  constructor({\n    trackGPU = false,\n    logsPerSecond = 30,\n    samplesLog = 60,\n    samplesGraph = 10,\n    precision = 2,\n    minimal = false,\n    horizontal = true,\n    mode = 0\n  } = {}) {\n    this.gl = null;\n    this.ext = null;\n    this.activeQuery = null;\n    this.gpuQueries = [];\n    this.threeRendererPatched = false;\n    this.frames = 0;\n    this.renderCount = 0;\n    this.isRunningCPUProfiling = false;\n    this.totalCpuDuration = 0;\n    this.totalGpuDuration = 0;\n    this.totalGpuDurationCompute = 0;\n    this.totalFps = 0;\n    this.gpuPanel = null;\n    this.gpuPanelCompute = null;\n    this.averageFps = { logs: [], graph: [] };\n    this.averageCpu = { logs: [], graph: [] };\n    this.averageGpu = { logs: [], graph: [] };\n    this.averageGpuCompute = { logs: [], graph: [] };\n    this.handleClick = (event) => {\n      event.preventDefault();\n      this.showPanel(++this.mode % this.dom.children.length);\n    };\n    this.handleResize = () => {\n      this.resizePanel(this.fpsPanel, 0);\n      this.resizePanel(this.msPanel, 1);\n      if (this.gpuPanel)\n        this.resizePanel(this.gpuPanel, 2);\n      if (this.gpuPanelCompute)\n        this.resizePanel(this.gpuPanelCompute, 3);\n    };\n    this.mode = mode;\n    this.horizontal = horizontal;\n    this.minimal = minimal;\n    this.trackGPU = trackGPU;\n    this.samplesLog = samplesLog;\n    this.samplesGraph = samplesGraph;\n    this.precision = precision;\n    this.logsPerSecond = logsPerSecond;\n    this.dom = document.createElement(\"div\");\n    this.initializeDOM();\n    this.beginTime = performance.now();\n    this.prevTime = this.beginTime;\n    this.prevCpuTime = this.beginTime;\n    this.fpsPanel = this.addPanel(new _Stats2.Panel(\"FPS\", \"#0ff\", \"#002\"), 0);\n    this.msPanel = this.addPanel(new _Stats2.Panel(\"CPU\", \"#0f0\", \"#020\"), 1);\n    this.setupEventListeners();\n  }\n  initializeDOM() {\n    this.dom.style.cssText = `\n      position: fixed;\n      top: 0;\n      left: 0;\n      opacity: 0.9;\n      z-index: 10000;\n      ${this.minimal ? \"cursor: pointer;\" : \"\"}\n    `;\n  }\n  setupEventListeners() {\n    if (this.minimal) {\n      this.dom.addEventListener(\"click\", this.handleClick);\n      this.showPanel(this.mode);\n    } else {\n      window.addEventListener(\"resize\", this.handleResize);\n    }\n  }\n  async init(canvasOrGL) {\n    if (!canvasOrGL) {\n      console.error('Stats: The \"canvas\" parameter is undefined.');\n      return;\n    }\n    if (this.handleThreeRenderer(canvasOrGL))\n      return;\n    if (await this.handleWebGPURenderer(canvasOrGL))\n      return;\n    if (!this.initializeWebGL(canvasOrGL))\n      return;\n  }\n  handleThreeRenderer(renderer) {\n    if (renderer.isWebGLRenderer && !this.threeRendererPatched) {\n      this.patchThreeRenderer(renderer);\n      this.gl = renderer.getContext();\n      if (this.trackGPU) {\n        this.initializeGPUTracking();\n      }\n      return true;\n    }\n    return false;\n  }\n  async handleWebGPURenderer(renderer) {\n    if (renderer.isWebGPURenderer) {\n      if (this.trackGPU) {\n        renderer.backend.trackTimestamp = true;\n        if (await renderer.hasFeatureAsync(\"timestamp-query\")) {\n          this.initializeWebGPUPanels();\n        }\n      }\n      this.info = renderer.info;\n      return true;\n    }\n    return false;\n  }\n  initializeWebGPUPanels() {\n    this.gpuPanel = this.addPanel(new _Stats2.Panel(\"GPU\", \"#ff0\", \"#220\"), 2);\n    this.gpuPanelCompute = this.addPanel(\n      new _Stats2.Panel(\"CPT\", \"#e1e1e1\", \"#212121\"),\n      3\n    );\n  }\n  initializeWebGL(canvasOrGL) {\n    if (canvasOrGL instanceof WebGL2RenderingContext) {\n      this.gl = canvasOrGL;\n    } else if (canvasOrGL instanceof HTMLCanvasElement || canvasOrGL instanceof OffscreenCanvas) {\n      this.gl = canvasOrGL.getContext(\"webgl2\");\n      if (!this.gl) {\n        console.error(\"Stats: Unable to obtain WebGL2 context.\");\n        return false;\n      }\n    } else {\n      console.error(\n        \"Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas.\"\n      );\n      return false;\n    }\n    return true;\n  }\n  initializeGPUTracking() {\n    if (this.gl) {\n      this.ext = this.gl.getExtension(\"EXT_disjoint_timer_query_webgl2\");\n      if (this.ext) {\n        this.gpuPanel = this.addPanel(new _Stats2.Panel(\"GPU\", \"#ff0\", \"#220\"), 2);\n      }\n    }\n  }\n  begin() {\n    if (!this.isRunningCPUProfiling) {\n      this.beginProfiling(\"cpu-started\");\n    }\n    if (!this.gl || !this.ext)\n      return;\n    if (this.activeQuery) {\n      this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);\n    }\n    this.activeQuery = this.gl.createQuery();\n    if (this.activeQuery) {\n      this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, this.activeQuery);\n    }\n  }\n  end() {\n    this.renderCount++;\n    if (this.gl && this.ext && this.activeQuery) {\n      this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);\n      this.gpuQueries.push({ query: this.activeQuery });\n      this.activeQuery = null;\n    }\n  }\n  update() {\n    if (!this.info) {\n      this.processGpuQueries();\n    } else {\n      this.processWebGPUTimestamps();\n    }\n    this.endProfiling(\"cpu-started\", \"cpu-finished\", \"cpu-duration\");\n    this.updateAverages();\n    this.resetCounters();\n  }\n  processWebGPUTimestamps() {\n    this.totalGpuDuration = this.info.render.timestamp;\n    this.totalGpuDurationCompute = this.info.compute.timestamp;\n    this.addToAverage(this.totalGpuDurationCompute, this.averageGpuCompute);\n  }\n  updateAverages() {\n    this.addToAverage(this.totalCpuDuration, this.averageCpu);\n    this.addToAverage(this.totalGpuDuration, this.averageGpu);\n  }\n  resetCounters() {\n    this.renderCount = 0;\n    if (this.totalCpuDuration === 0) {\n      this.beginProfiling(\"cpu-started\");\n    }\n    this.totalCpuDuration = 0;\n    this.totalFps = 0;\n    this.beginTime = this.endInternal();\n  }\n  resizePanel(panel2, offset) {\n    panel2.canvas.style.position = \"absolute\";\n    if (this.minimal) {\n      panel2.canvas.style.display = \"none\";\n    } else {\n      panel2.canvas.style.display = \"block\";\n      if (this.horizontal) {\n        panel2.canvas.style.top = \"0px\";\n        panel2.canvas.style.left = offset * panel2.WIDTH / panel2.PR + \"px\";\n      } else {\n        panel2.canvas.style.left = \"0px\";\n        panel2.canvas.style.top = offset * panel2.HEIGHT / panel2.PR + \"px\";\n      }\n    }\n  }\n  addPanel(panel2, offset) {\n    if (panel2.canvas) {\n      this.dom.appendChild(panel2.canvas);\n      this.resizePanel(panel2, offset);\n    }\n    return panel2;\n  }\n  showPanel(id) {\n    for (let i = 0; i < this.dom.children.length; i++) {\n      const child = this.dom.children[i];\n      child.style.display = i === id ? \"block\" : \"none\";\n    }\n    this.mode = id;\n  }\n  processGpuQueries() {\n    if (!this.gl || !this.ext)\n      return;\n    this.totalGpuDuration = 0;\n    this.gpuQueries.forEach((queryInfo, index) => {\n      if (this.gl) {\n        const available = this.gl.getQueryParameter(queryInfo.query, this.gl.QUERY_RESULT_AVAILABLE);\n        const disjoint = this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);\n        if (available && !disjoint) {\n          const elapsed = this.gl.getQueryParameter(queryInfo.query, this.gl.QUERY_RESULT);\n          const duration = elapsed * 1e-6;\n          this.totalGpuDuration += duration;\n          this.gl.deleteQuery(queryInfo.query);\n          this.gpuQueries.splice(index, 1);\n        }\n      }\n    });\n  }\n  endInternal() {\n    this.frames++;\n    const time = (performance || Date).now();\n    const elapsed = time - this.prevTime;\n    if (time >= this.prevCpuTime + 1e3 / this.logsPerSecond) {\n      const fps = Math.round(this.frames * 1e3 / elapsed);\n      this.addToAverage(fps, this.averageFps);\n      this.updatePanel(this.fpsPanel, this.averageFps, 0);\n      this.updatePanel(this.msPanel, this.averageCpu, this.precision);\n      this.updatePanel(this.gpuPanel, this.averageGpu, this.precision);\n      if (this.gpuPanelCompute) {\n        this.updatePanel(this.gpuPanelCompute, this.averageGpuCompute);\n      }\n      this.frames = 0;\n      this.prevCpuTime = time;\n      this.prevTime = time;\n    }\n    return time;\n  }\n  addToAverage(value, averageArray) {\n    averageArray.logs.push(value);\n    if (averageArray.logs.length > this.samplesLog) {\n      averageArray.logs.shift();\n    }\n    averageArray.graph.push(value);\n    if (averageArray.graph.length > this.samplesGraph) {\n      averageArray.graph.shift();\n    }\n  }\n  beginProfiling(marker) {\n    if (window.performance) {\n      window.performance.mark(marker);\n      this.isRunningCPUProfiling = true;\n    }\n  }\n  endProfiling(startMarker, endMarker, measureName) {\n    if (window.performance && endMarker && this.isRunningCPUProfiling) {\n      window.performance.mark(endMarker);\n      const cpuMeasure = performance.measure(measureName, startMarker, endMarker);\n      this.totalCpuDuration += cpuMeasure.duration;\n      this.isRunningCPUProfiling = false;\n    }\n  }\n  updatePanel(panel2, averageArray, precision = 2) {\n    if (averageArray.logs.length > 0) {\n      let sumLog = 0;\n      let max = 0.01;\n      for (let i = 0; i < averageArray.logs.length; i++) {\n        sumLog += averageArray.logs[i];\n        if (averageArray.logs[i] > max) {\n          max = averageArray.logs[i];\n        }\n      }\n      let sumGraph = 0;\n      let maxGraph = 0.01;\n      for (let i = 0; i < averageArray.graph.length; i++) {\n        sumGraph += averageArray.graph[i];\n        if (averageArray.graph[i] > maxGraph) {\n          maxGraph = averageArray.graph[i];\n        }\n      }\n      if (panel2) {\n        panel2.update(sumLog / Math.min(averageArray.logs.length, this.samplesLog), sumGraph / Math.min(averageArray.graph.length, this.samplesGraph), max, maxGraph, precision);\n      }\n    }\n  }\n  get domElement() {\n    return this.dom;\n  }\n  patchThreeRenderer(renderer) {\n    const originalRenderMethod = renderer.render;\n    const statsInstance = this;\n    renderer.render = function(scene, camera) {\n      statsInstance.begin();\n      originalRenderMethod.call(this, scene, camera);\n      statsInstance.end();\n    };\n    this.threeRendererPatched = true;\n  }\n};\n_Stats.Panel = panel.Panel;\nlet Stats = _Stats;\nmodule.exports = Stats;\n//# sourceMappingURL=main.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RhdHMtZ2wvZGlzdC9tYWluLmNqcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLGNBQWMsbUJBQU8sQ0FBQyxpRUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QiwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnQ0FBZ0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlCQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC50c3gvLi9ub2RlX21vZHVsZXMvc3RhdHMtZ2wvZGlzdC9tYWluLmNqcz81Mzk4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgcGFuZWwgPSByZXF1aXJlKFwiLi9wYW5lbC5janNcIik7XG5jb25zdCBfU3RhdHMgPSBjbGFzcyBfU3RhdHMyIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHRyYWNrR1BVID0gZmFsc2UsXG4gICAgbG9nc1BlclNlY29uZCA9IDMwLFxuICAgIHNhbXBsZXNMb2cgPSA2MCxcbiAgICBzYW1wbGVzR3JhcGggPSAxMCxcbiAgICBwcmVjaXNpb24gPSAyLFxuICAgIG1pbmltYWwgPSBmYWxzZSxcbiAgICBob3Jpem9udGFsID0gdHJ1ZSxcbiAgICBtb2RlID0gMFxuICB9ID0ge30pIHtcbiAgICB0aGlzLmdsID0gbnVsbDtcbiAgICB0aGlzLmV4dCA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVRdWVyeSA9IG51bGw7XG4gICAgdGhpcy5ncHVRdWVyaWVzID0gW107XG4gICAgdGhpcy50aHJlZVJlbmRlcmVyUGF0Y2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuZnJhbWVzID0gMDtcbiAgICB0aGlzLnJlbmRlckNvdW50ID0gMDtcbiAgICB0aGlzLmlzUnVubmluZ0NQVVByb2ZpbGluZyA9IGZhbHNlO1xuICAgIHRoaXMudG90YWxDcHVEdXJhdGlvbiA9IDA7XG4gICAgdGhpcy50b3RhbEdwdUR1cmF0aW9uID0gMDtcbiAgICB0aGlzLnRvdGFsR3B1RHVyYXRpb25Db21wdXRlID0gMDtcbiAgICB0aGlzLnRvdGFsRnBzID0gMDtcbiAgICB0aGlzLmdwdVBhbmVsID0gbnVsbDtcbiAgICB0aGlzLmdwdVBhbmVsQ29tcHV0ZSA9IG51bGw7XG4gICAgdGhpcy5hdmVyYWdlRnBzID0geyBsb2dzOiBbXSwgZ3JhcGg6IFtdIH07XG4gICAgdGhpcy5hdmVyYWdlQ3B1ID0geyBsb2dzOiBbXSwgZ3JhcGg6IFtdIH07XG4gICAgdGhpcy5hdmVyYWdlR3B1ID0geyBsb2dzOiBbXSwgZ3JhcGg6IFtdIH07XG4gICAgdGhpcy5hdmVyYWdlR3B1Q29tcHV0ZSA9IHsgbG9nczogW10sIGdyYXBoOiBbXSB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNob3dQYW5lbCgrK3RoaXMubW9kZSAlIHRoaXMuZG9tLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVzaXplUGFuZWwodGhpcy5mcHNQYW5lbCwgMCk7XG4gICAgICB0aGlzLnJlc2l6ZVBhbmVsKHRoaXMubXNQYW5lbCwgMSk7XG4gICAgICBpZiAodGhpcy5ncHVQYW5lbClcbiAgICAgICAgdGhpcy5yZXNpemVQYW5lbCh0aGlzLmdwdVBhbmVsLCAyKTtcbiAgICAgIGlmICh0aGlzLmdwdVBhbmVsQ29tcHV0ZSlcbiAgICAgICAgdGhpcy5yZXNpemVQYW5lbCh0aGlzLmdwdVBhbmVsQ29tcHV0ZSwgMyk7XG4gICAgfTtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuaG9yaXpvbnRhbCA9IGhvcml6b250YWw7XG4gICAgdGhpcy5taW5pbWFsID0gbWluaW1hbDtcbiAgICB0aGlzLnRyYWNrR1BVID0gdHJhY2tHUFU7XG4gICAgdGhpcy5zYW1wbGVzTG9nID0gc2FtcGxlc0xvZztcbiAgICB0aGlzLnNhbXBsZXNHcmFwaCA9IHNhbXBsZXNHcmFwaDtcbiAgICB0aGlzLnByZWNpc2lvbiA9IHByZWNpc2lvbjtcbiAgICB0aGlzLmxvZ3NQZXJTZWNvbmQgPSBsb2dzUGVyU2Vjb25kO1xuICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmluaXRpYWxpemVET00oKTtcbiAgICB0aGlzLmJlZ2luVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMucHJldlRpbWUgPSB0aGlzLmJlZ2luVGltZTtcbiAgICB0aGlzLnByZXZDcHVUaW1lID0gdGhpcy5iZWdpblRpbWU7XG4gICAgdGhpcy5mcHNQYW5lbCA9IHRoaXMuYWRkUGFuZWwobmV3IF9TdGF0czIuUGFuZWwoXCJGUFNcIiwgXCIjMGZmXCIsIFwiIzAwMlwiKSwgMCk7XG4gICAgdGhpcy5tc1BhbmVsID0gdGhpcy5hZGRQYW5lbChuZXcgX1N0YXRzMi5QYW5lbChcIkNQVVwiLCBcIiMwZjBcIiwgXCIjMDIwXCIpLCAxKTtcbiAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuICBpbml0aWFsaXplRE9NKCkge1xuICAgIHRoaXMuZG9tLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAke3RoaXMubWluaW1hbCA/IFwiY3Vyc29yOiBwb2ludGVyO1wiIDogXCJcIn1cbiAgICBgO1xuICB9XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMubWluaW1hbCkge1xuICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgdGhpcy5zaG93UGFuZWwodGhpcy5tb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cbiAgfVxuICBhc3luYyBpbml0KGNhbnZhc09yR0wpIHtcbiAgICBpZiAoIWNhbnZhc09yR0wpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXRzOiBUaGUgXCJjYW52YXNcIiBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYW5kbGVUaHJlZVJlbmRlcmVyKGNhbnZhc09yR0wpKVxuICAgICAgcmV0dXJuO1xuICAgIGlmIChhd2FpdCB0aGlzLmhhbmRsZVdlYkdQVVJlbmRlcmVyKGNhbnZhc09yR0wpKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplV2ViR0woY2FudmFzT3JHTCkpXG4gICAgICByZXR1cm47XG4gIH1cbiAgaGFuZGxlVGhyZWVSZW5kZXJlcihyZW5kZXJlcikge1xuICAgIGlmIChyZW5kZXJlci5pc1dlYkdMUmVuZGVyZXIgJiYgIXRoaXMudGhyZWVSZW5kZXJlclBhdGNoZWQpIHtcbiAgICAgIHRoaXMucGF0Y2hUaHJlZVJlbmRlcmVyKHJlbmRlcmVyKTtcbiAgICAgIHRoaXMuZ2wgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICBpZiAodGhpcy50cmFja0dQVSkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVHUFVUcmFja2luZygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBhc3luYyBoYW5kbGVXZWJHUFVSZW5kZXJlcihyZW5kZXJlcikge1xuICAgIGlmIChyZW5kZXJlci5pc1dlYkdQVVJlbmRlcmVyKSB7XG4gICAgICBpZiAodGhpcy50cmFja0dQVSkge1xuICAgICAgICByZW5kZXJlci5iYWNrZW5kLnRyYWNrVGltZXN0YW1wID0gdHJ1ZTtcbiAgICAgICAgaWYgKGF3YWl0IHJlbmRlcmVyLmhhc0ZlYXR1cmVBc3luYyhcInRpbWVzdGFtcC1xdWVyeVwiKSkge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVdlYkdQVVBhbmVscygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmluZm8gPSByZW5kZXJlci5pbmZvO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpbml0aWFsaXplV2ViR1BVUGFuZWxzKCkge1xuICAgIHRoaXMuZ3B1UGFuZWwgPSB0aGlzLmFkZFBhbmVsKG5ldyBfU3RhdHMyLlBhbmVsKFwiR1BVXCIsIFwiI2ZmMFwiLCBcIiMyMjBcIiksIDIpO1xuICAgIHRoaXMuZ3B1UGFuZWxDb21wdXRlID0gdGhpcy5hZGRQYW5lbChcbiAgICAgIG5ldyBfU3RhdHMyLlBhbmVsKFwiQ1BUXCIsIFwiI2UxZTFlMVwiLCBcIiMyMTIxMjFcIiksXG4gICAgICAzXG4gICAgKTtcbiAgfVxuICBpbml0aWFsaXplV2ViR0woY2FudmFzT3JHTCkge1xuICAgIGlmIChjYW52YXNPckdMIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgdGhpcy5nbCA9IGNhbnZhc09yR0w7XG4gICAgfSBlbHNlIGlmIChjYW52YXNPckdMIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgfHwgY2FudmFzT3JHTCBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcykge1xuICAgICAgdGhpcy5nbCA9IGNhbnZhc09yR0wuZ2V0Q29udGV4dChcIndlYmdsMlwiKTtcbiAgICAgIGlmICghdGhpcy5nbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiU3RhdHM6IFVuYWJsZSB0byBvYnRhaW4gV2ViR0wyIGNvbnRleHQuXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiU3RhdHM6IEludmFsaWQgaW5wdXQgdHlwZS4gRXhwZWN0ZWQgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCwgSFRNTENhbnZhc0VsZW1lbnQsIG9yIE9mZnNjcmVlbkNhbnZhcy5cIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaW5pdGlhbGl6ZUdQVVRyYWNraW5nKCkge1xuICAgIGlmICh0aGlzLmdsKSB7XG4gICAgICB0aGlzLmV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5X3dlYmdsMlwiKTtcbiAgICAgIGlmICh0aGlzLmV4dCkge1xuICAgICAgICB0aGlzLmdwdVBhbmVsID0gdGhpcy5hZGRQYW5lbChuZXcgX1N0YXRzMi5QYW5lbChcIkdQVVwiLCBcIiNmZjBcIiwgXCIjMjIwXCIpLCAyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYmVnaW4oKSB7XG4gICAgaWYgKCF0aGlzLmlzUnVubmluZ0NQVVByb2ZpbGluZykge1xuICAgICAgdGhpcy5iZWdpblByb2ZpbGluZyhcImNwdS1zdGFydGVkXCIpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZ2wgfHwgIXRoaXMuZXh0KVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLmFjdGl2ZVF1ZXJ5KSB7XG4gICAgICB0aGlzLmdsLmVuZFF1ZXJ5KHRoaXMuZXh0LlRJTUVfRUxBUFNFRF9FWFQpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZVF1ZXJ5ID0gdGhpcy5nbC5jcmVhdGVRdWVyeSgpO1xuICAgIGlmICh0aGlzLmFjdGl2ZVF1ZXJ5KSB7XG4gICAgICB0aGlzLmdsLmJlZ2luUXVlcnkodGhpcy5leHQuVElNRV9FTEFQU0VEX0VYVCwgdGhpcy5hY3RpdmVRdWVyeSk7XG4gICAgfVxuICB9XG4gIGVuZCgpIHtcbiAgICB0aGlzLnJlbmRlckNvdW50Kys7XG4gICAgaWYgKHRoaXMuZ2wgJiYgdGhpcy5leHQgJiYgdGhpcy5hY3RpdmVRdWVyeSkge1xuICAgICAgdGhpcy5nbC5lbmRRdWVyeSh0aGlzLmV4dC5USU1FX0VMQVBTRURfRVhUKTtcbiAgICAgIHRoaXMuZ3B1UXVlcmllcy5wdXNoKHsgcXVlcnk6IHRoaXMuYWN0aXZlUXVlcnkgfSk7XG4gICAgICB0aGlzLmFjdGl2ZVF1ZXJ5ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5pbmZvKSB7XG4gICAgICB0aGlzLnByb2Nlc3NHcHVRdWVyaWVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvY2Vzc1dlYkdQVVRpbWVzdGFtcHMoKTtcbiAgICB9XG4gICAgdGhpcy5lbmRQcm9maWxpbmcoXCJjcHUtc3RhcnRlZFwiLCBcImNwdS1maW5pc2hlZFwiLCBcImNwdS1kdXJhdGlvblwiKTtcbiAgICB0aGlzLnVwZGF0ZUF2ZXJhZ2VzKCk7XG4gICAgdGhpcy5yZXNldENvdW50ZXJzKCk7XG4gIH1cbiAgcHJvY2Vzc1dlYkdQVVRpbWVzdGFtcHMoKSB7XG4gICAgdGhpcy50b3RhbEdwdUR1cmF0aW9uID0gdGhpcy5pbmZvLnJlbmRlci50aW1lc3RhbXA7XG4gICAgdGhpcy50b3RhbEdwdUR1cmF0aW9uQ29tcHV0ZSA9IHRoaXMuaW5mby5jb21wdXRlLnRpbWVzdGFtcDtcbiAgICB0aGlzLmFkZFRvQXZlcmFnZSh0aGlzLnRvdGFsR3B1RHVyYXRpb25Db21wdXRlLCB0aGlzLmF2ZXJhZ2VHcHVDb21wdXRlKTtcbiAgfVxuICB1cGRhdGVBdmVyYWdlcygpIHtcbiAgICB0aGlzLmFkZFRvQXZlcmFnZSh0aGlzLnRvdGFsQ3B1RHVyYXRpb24sIHRoaXMuYXZlcmFnZUNwdSk7XG4gICAgdGhpcy5hZGRUb0F2ZXJhZ2UodGhpcy50b3RhbEdwdUR1cmF0aW9uLCB0aGlzLmF2ZXJhZ2VHcHUpO1xuICB9XG4gIHJlc2V0Q291bnRlcnMoKSB7XG4gICAgdGhpcy5yZW5kZXJDb3VudCA9IDA7XG4gICAgaWYgKHRoaXMudG90YWxDcHVEdXJhdGlvbiA9PT0gMCkge1xuICAgICAgdGhpcy5iZWdpblByb2ZpbGluZyhcImNwdS1zdGFydGVkXCIpO1xuICAgIH1cbiAgICB0aGlzLnRvdGFsQ3B1RHVyYXRpb24gPSAwO1xuICAgIHRoaXMudG90YWxGcHMgPSAwO1xuICAgIHRoaXMuYmVnaW5UaW1lID0gdGhpcy5lbmRJbnRlcm5hbCgpO1xuICB9XG4gIHJlc2l6ZVBhbmVsKHBhbmVsMiwgb2Zmc2V0KSB7XG4gICAgcGFuZWwyLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBpZiAodGhpcy5taW5pbWFsKSB7XG4gICAgICBwYW5lbDIuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFuZWwyLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbCkge1xuICAgICAgICBwYW5lbDIuY2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgIHBhbmVsMi5jYW52YXMuc3R5bGUubGVmdCA9IG9mZnNldCAqIHBhbmVsMi5XSURUSCAvIHBhbmVsMi5QUiArIFwicHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmVsMi5jYW52YXMuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIHBhbmVsMi5jYW52YXMuc3R5bGUudG9wID0gb2Zmc2V0ICogcGFuZWwyLkhFSUdIVCAvIHBhbmVsMi5QUiArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYWRkUGFuZWwocGFuZWwyLCBvZmZzZXQpIHtcbiAgICBpZiAocGFuZWwyLmNhbnZhcykge1xuICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQocGFuZWwyLmNhbnZhcyk7XG4gICAgICB0aGlzLnJlc2l6ZVBhbmVsKHBhbmVsMiwgb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhbmVsMjtcbiAgfVxuICBzaG93UGFuZWwoaWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZG9tLmNoaWxkcmVuW2ldO1xuICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IGkgPT09IGlkID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgfVxuICAgIHRoaXMubW9kZSA9IGlkO1xuICB9XG4gIHByb2Nlc3NHcHVRdWVyaWVzKCkge1xuICAgIGlmICghdGhpcy5nbCB8fCAhdGhpcy5leHQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy50b3RhbEdwdUR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmdwdVF1ZXJpZXMuZm9yRWFjaCgocXVlcnlJbmZvLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2wpIHtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gdGhpcy5nbC5nZXRRdWVyeVBhcmFtZXRlcihxdWVyeUluZm8ucXVlcnksIHRoaXMuZ2wuUVVFUllfUkVTVUxUX0FWQUlMQUJMRSk7XG4gICAgICAgIGNvbnN0IGRpc2pvaW50ID0gdGhpcy5nbC5nZXRQYXJhbWV0ZXIodGhpcy5leHQuR1BVX0RJU0pPSU5UX0VYVCk7XG4gICAgICAgIGlmIChhdmFpbGFibGUgJiYgIWRpc2pvaW50KSB7XG4gICAgICAgICAgY29uc3QgZWxhcHNlZCA9IHRoaXMuZ2wuZ2V0UXVlcnlQYXJhbWV0ZXIocXVlcnlJbmZvLnF1ZXJ5LCB0aGlzLmdsLlFVRVJZX1JFU1VMVCk7XG4gICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBlbGFwc2VkICogMWUtNjtcbiAgICAgICAgICB0aGlzLnRvdGFsR3B1RHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICAgICAgdGhpcy5nbC5kZWxldGVRdWVyeShxdWVyeUluZm8ucXVlcnkpO1xuICAgICAgICAgIHRoaXMuZ3B1UXVlcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZW5kSW50ZXJuYWwoKSB7XG4gICAgdGhpcy5mcmFtZXMrKztcbiAgICBjb25zdCB0aW1lID0gKHBlcmZvcm1hbmNlIHx8IERhdGUpLm5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lIC0gdGhpcy5wcmV2VGltZTtcbiAgICBpZiAodGltZSA+PSB0aGlzLnByZXZDcHVUaW1lICsgMWUzIC8gdGhpcy5sb2dzUGVyU2Vjb25kKSB7XG4gICAgICBjb25zdCBmcHMgPSBNYXRoLnJvdW5kKHRoaXMuZnJhbWVzICogMWUzIC8gZWxhcHNlZCk7XG4gICAgICB0aGlzLmFkZFRvQXZlcmFnZShmcHMsIHRoaXMuYXZlcmFnZUZwcyk7XG4gICAgICB0aGlzLnVwZGF0ZVBhbmVsKHRoaXMuZnBzUGFuZWwsIHRoaXMuYXZlcmFnZUZwcywgMCk7XG4gICAgICB0aGlzLnVwZGF0ZVBhbmVsKHRoaXMubXNQYW5lbCwgdGhpcy5hdmVyYWdlQ3B1LCB0aGlzLnByZWNpc2lvbik7XG4gICAgICB0aGlzLnVwZGF0ZVBhbmVsKHRoaXMuZ3B1UGFuZWwsIHRoaXMuYXZlcmFnZUdwdSwgdGhpcy5wcmVjaXNpb24pO1xuICAgICAgaWYgKHRoaXMuZ3B1UGFuZWxDb21wdXRlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFuZWwodGhpcy5ncHVQYW5lbENvbXB1dGUsIHRoaXMuYXZlcmFnZUdwdUNvbXB1dGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5mcmFtZXMgPSAwO1xuICAgICAgdGhpcy5wcmV2Q3B1VGltZSA9IHRpbWU7XG4gICAgICB0aGlzLnByZXZUaW1lID0gdGltZTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cbiAgYWRkVG9BdmVyYWdlKHZhbHVlLCBhdmVyYWdlQXJyYXkpIHtcbiAgICBhdmVyYWdlQXJyYXkubG9ncy5wdXNoKHZhbHVlKTtcbiAgICBpZiAoYXZlcmFnZUFycmF5LmxvZ3MubGVuZ3RoID4gdGhpcy5zYW1wbGVzTG9nKSB7XG4gICAgICBhdmVyYWdlQXJyYXkubG9ncy5zaGlmdCgpO1xuICAgIH1cbiAgICBhdmVyYWdlQXJyYXkuZ3JhcGgucHVzaCh2YWx1ZSk7XG4gICAgaWYgKGF2ZXJhZ2VBcnJheS5ncmFwaC5sZW5ndGggPiB0aGlzLnNhbXBsZXNHcmFwaCkge1xuICAgICAgYXZlcmFnZUFycmF5LmdyYXBoLnNoaWZ0KCk7XG4gICAgfVxuICB9XG4gIGJlZ2luUHJvZmlsaW5nKG1hcmtlcikge1xuICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5tYXJrKG1hcmtlcik7XG4gICAgICB0aGlzLmlzUnVubmluZ0NQVVByb2ZpbGluZyA9IHRydWU7XG4gICAgfVxuICB9XG4gIGVuZFByb2ZpbGluZyhzdGFydE1hcmtlciwgZW5kTWFya2VyLCBtZWFzdXJlTmFtZSkge1xuICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgZW5kTWFya2VyICYmIHRoaXMuaXNSdW5uaW5nQ1BVUHJvZmlsaW5nKSB7XG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UubWFyayhlbmRNYXJrZXIpO1xuICAgICAgY29uc3QgY3B1TWVhc3VyZSA9IHBlcmZvcm1hbmNlLm1lYXN1cmUobWVhc3VyZU5hbWUsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuICAgICAgdGhpcy50b3RhbENwdUR1cmF0aW9uICs9IGNwdU1lYXN1cmUuZHVyYXRpb247XG4gICAgICB0aGlzLmlzUnVubmluZ0NQVVByb2ZpbGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICB1cGRhdGVQYW5lbChwYW5lbDIsIGF2ZXJhZ2VBcnJheSwgcHJlY2lzaW9uID0gMikge1xuICAgIGlmIChhdmVyYWdlQXJyYXkubG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgc3VtTG9nID0gMDtcbiAgICAgIGxldCBtYXggPSAwLjAxO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmVyYWdlQXJyYXkubG9ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdW1Mb2cgKz0gYXZlcmFnZUFycmF5LmxvZ3NbaV07XG4gICAgICAgIGlmIChhdmVyYWdlQXJyYXkubG9nc1tpXSA+IG1heCkge1xuICAgICAgICAgIG1heCA9IGF2ZXJhZ2VBcnJheS5sb2dzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgc3VtR3JhcGggPSAwO1xuICAgICAgbGV0IG1heEdyYXBoID0gMC4wMTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZlcmFnZUFycmF5LmdyYXBoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1bUdyYXBoICs9IGF2ZXJhZ2VBcnJheS5ncmFwaFtpXTtcbiAgICAgICAgaWYgKGF2ZXJhZ2VBcnJheS5ncmFwaFtpXSA+IG1heEdyYXBoKSB7XG4gICAgICAgICAgbWF4R3JhcGggPSBhdmVyYWdlQXJyYXkuZ3JhcGhbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYW5lbDIpIHtcbiAgICAgICAgcGFuZWwyLnVwZGF0ZShzdW1Mb2cgLyBNYXRoLm1pbihhdmVyYWdlQXJyYXkubG9ncy5sZW5ndGgsIHRoaXMuc2FtcGxlc0xvZyksIHN1bUdyYXBoIC8gTWF0aC5taW4oYXZlcmFnZUFycmF5LmdyYXBoLmxlbmd0aCwgdGhpcy5zYW1wbGVzR3JhcGgpLCBtYXgsIG1heEdyYXBoLCBwcmVjaXNpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb207XG4gIH1cbiAgcGF0Y2hUaHJlZVJlbmRlcmVyKHJlbmRlcmVyKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZW5kZXJNZXRob2QgPSByZW5kZXJlci5yZW5kZXI7XG4gICAgY29uc3Qgc3RhdHNJbnN0YW5jZSA9IHRoaXM7XG4gICAgcmVuZGVyZXIucmVuZGVyID0gZnVuY3Rpb24oc2NlbmUsIGNhbWVyYSkge1xuICAgICAgc3RhdHNJbnN0YW5jZS5iZWdpbigpO1xuICAgICAgb3JpZ2luYWxSZW5kZXJNZXRob2QuY2FsbCh0aGlzLCBzY2VuZSwgY2FtZXJhKTtcbiAgICAgIHN0YXRzSW5zdGFuY2UuZW5kKCk7XG4gICAgfTtcbiAgICB0aGlzLnRocmVlUmVuZGVyZXJQYXRjaGVkID0gdHJ1ZTtcbiAgfVxufTtcbl9TdGF0cy5QYW5lbCA9IHBhbmVsLlBhbmVsO1xubGV0IFN0YXRzID0gX1N0YXRzO1xubW9kdWxlLmV4cG9ydHMgPSBTdGF0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uY2pzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stats-gl/dist/main.cjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/stats-gl/dist/panel.cjs":
/*!**********************************************!*\
  !*** ./node_modules/stats-gl/dist/panel.cjs ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, Symbol.toStringTag, { value: \"Module\" });\nclass Panel {\n  constructor(name, fg, bg) {\n    this.name = name;\n    this.fg = fg;\n    this.bg = bg;\n    this.gradient = null;\n    this.PR = Math.round(window.devicePixelRatio || 1);\n    this.WIDTH = 90 * this.PR;\n    this.HEIGHT = 48 * this.PR;\n    this.TEXT_X = 3 * this.PR;\n    this.TEXT_Y = 2 * this.PR;\n    this.GRAPH_X = 3 * this.PR;\n    this.GRAPH_Y = 15 * this.PR;\n    this.GRAPH_WIDTH = 84 * this.PR;\n    this.GRAPH_HEIGHT = 30 * this.PR;\n    this.canvas = document.createElement(\"canvas\");\n    this.canvas.width = this.WIDTH;\n    this.canvas.height = this.HEIGHT;\n    this.canvas.style.width = \"90px\";\n    this.canvas.style.height = \"48px\";\n    this.canvas.style.position = \"absolute\";\n    this.canvas.style.cssText = \"width:90px;height:48px\";\n    this.context = this.canvas.getContext(\"2d\");\n    this.initializeCanvas();\n  }\n  createGradient() {\n    if (!this.context)\n      throw new Error(\"No context\");\n    const gradient = this.context.createLinearGradient(\n      0,\n      this.GRAPH_Y,\n      0,\n      this.GRAPH_Y + this.GRAPH_HEIGHT\n    );\n    let startColor;\n    const endColor = this.fg;\n    switch (this.fg.toLowerCase()) {\n      case \"#0ff\":\n        startColor = \"#006666\";\n        break;\n      case \"#0f0\":\n        startColor = \"#006600\";\n        break;\n      case \"#ff0\":\n        startColor = \"#666600\";\n        break;\n      case \"#e1e1e1\":\n        startColor = \"#666666\";\n        break;\n      default:\n        startColor = this.bg;\n        break;\n    }\n    gradient.addColorStop(0, startColor);\n    gradient.addColorStop(1, endColor);\n    return gradient;\n  }\n  initializeCanvas() {\n    if (!this.context)\n      return;\n    this.context.font = \"bold \" + 9 * this.PR + \"px Helvetica,Arial,sans-serif\";\n    this.context.textBaseline = \"top\";\n    this.gradient = this.createGradient();\n    this.context.fillStyle = this.bg;\n    this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);\n    this.context.fillStyle = this.fg;\n    this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y);\n    this.context.fillStyle = this.fg;\n    this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);\n    this.context.fillStyle = this.bg;\n    this.context.globalAlpha = 0.9;\n    this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);\n  }\n  update(value, valueGraph, maxValue, maxGraph, decimals = 0) {\n    if (!this.context || !this.gradient)\n      return;\n    const min = Math.min(Infinity, value);\n    const max = Math.max(maxValue, value);\n    maxGraph = Math.max(maxGraph, valueGraph);\n    this.context.globalAlpha = 1;\n    this.context.fillStyle = this.bg;\n    this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y);\n    this.context.fillStyle = this.fg;\n    this.context.fillText(\n      `${value.toFixed(decimals)} ${this.name} (${min.toFixed(decimals)}-${parseFloat(\n        max.toFixed(decimals)\n      )})`,\n      this.TEXT_X,\n      this.TEXT_Y\n    );\n    this.context.drawImage(\n      this.canvas,\n      this.GRAPH_X + this.PR,\n      this.GRAPH_Y,\n      this.GRAPH_WIDTH - this.PR,\n      this.GRAPH_HEIGHT,\n      this.GRAPH_X,\n      this.GRAPH_Y,\n      this.GRAPH_WIDTH - this.PR,\n      this.GRAPH_HEIGHT\n    );\n    const columnHeight = this.GRAPH_HEIGHT - (1 - valueGraph / maxGraph) * this.GRAPH_HEIGHT;\n    if (columnHeight > 0) {\n      this.context.globalAlpha = 1;\n      this.context.fillStyle = this.gradient;\n      this.context.fillRect(\n        this.GRAPH_X + this.GRAPH_WIDTH - this.PR,\n        this.GRAPH_Y + this.GRAPH_HEIGHT - columnHeight,\n        this.PR,\n        columnHeight\n      );\n    }\n  }\n}\nexports.Panel = Panel;\n//# sourceMappingURL=panel.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RhdHMtZ2wvZGlzdC9wYW5lbC5janMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixxREFBcUQsaUJBQWlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5QkFBeUIsRUFBRSxXQUFXLEdBQUcsc0JBQXNCLEdBQUc7QUFDM0U7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLnRzeC8uL25vZGVfbW9kdWxlcy9zdGF0cy1nbC9kaXN0L3BhbmVsLmNqcz84MzBiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KTtcbmNsYXNzIFBhbmVsIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZmcsIGJnKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmZnID0gZmc7XG4gICAgdGhpcy5iZyA9IGJnO1xuICAgIHRoaXMuZ3JhZGllbnQgPSBudWxsO1xuICAgIHRoaXMuUFIgPSBNYXRoLnJvdW5kKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpO1xuICAgIHRoaXMuV0lEVEggPSA5MCAqIHRoaXMuUFI7XG4gICAgdGhpcy5IRUlHSFQgPSA0OCAqIHRoaXMuUFI7XG4gICAgdGhpcy5URVhUX1ggPSAzICogdGhpcy5QUjtcbiAgICB0aGlzLlRFWFRfWSA9IDIgKiB0aGlzLlBSO1xuICAgIHRoaXMuR1JBUEhfWCA9IDMgKiB0aGlzLlBSO1xuICAgIHRoaXMuR1JBUEhfWSA9IDE1ICogdGhpcy5QUjtcbiAgICB0aGlzLkdSQVBIX1dJRFRIID0gODQgKiB0aGlzLlBSO1xuICAgIHRoaXMuR1JBUEhfSEVJR0hUID0gMzAgKiB0aGlzLlBSO1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuV0lEVEg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5IRUlHSFQ7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBcIjkwcHhcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIjQ4cHhcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDo5MHB4O2hlaWdodDo0OHB4XCI7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNhbnZhcygpO1xuICB9XG4gIGNyZWF0ZUdyYWRpZW50KCkge1xuICAgIGlmICghdGhpcy5jb250ZXh0KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29udGV4dFwiKTtcbiAgICBjb25zdCBncmFkaWVudCA9IHRoaXMuY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudChcbiAgICAgIDAsXG4gICAgICB0aGlzLkdSQVBIX1ksXG4gICAgICAwLFxuICAgICAgdGhpcy5HUkFQSF9ZICsgdGhpcy5HUkFQSF9IRUlHSFRcbiAgICApO1xuICAgIGxldCBzdGFydENvbG9yO1xuICAgIGNvbnN0IGVuZENvbG9yID0gdGhpcy5mZztcbiAgICBzd2l0Y2ggKHRoaXMuZmcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSBcIiMwZmZcIjpcbiAgICAgICAgc3RhcnRDb2xvciA9IFwiIzAwNjY2NlwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIjMGYwXCI6XG4gICAgICAgIHN0YXJ0Q29sb3IgPSBcIiMwMDY2MDBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiI2ZmMFwiOlxuICAgICAgICBzdGFydENvbG9yID0gXCIjNjY2NjAwXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiNlMWUxZTFcIjpcbiAgICAgICAgc3RhcnRDb2xvciA9IFwiIzY2NjY2NlwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXJ0Q29sb3IgPSB0aGlzLmJnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHN0YXJ0Q29sb3IpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBlbmRDb2xvcik7XG4gICAgcmV0dXJuIGdyYWRpZW50O1xuICB9XG4gIGluaXRpYWxpemVDYW52YXMoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRleHQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcImJvbGQgXCIgKyA5ICogdGhpcy5QUiArIFwicHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZcIjtcbiAgICB0aGlzLmNvbnRleHQudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICB0aGlzLmdyYWRpZW50ID0gdGhpcy5jcmVhdGVHcmFkaWVudCgpO1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJnO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLldJRFRILCB0aGlzLkhFSUdIVCk7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmc7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRoaXMubmFtZSwgdGhpcy5URVhUX1gsIHRoaXMuVEVYVF9ZKTtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5mZztcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5HUkFQSF9YLCB0aGlzLkdSQVBIX1ksIHRoaXMuR1JBUEhfV0lEVEgsIHRoaXMuR1JBUEhfSEVJR0hUKTtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iZztcbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuR1JBUEhfWCwgdGhpcy5HUkFQSF9ZLCB0aGlzLkdSQVBIX1dJRFRILCB0aGlzLkdSQVBIX0hFSUdIVCk7XG4gIH1cbiAgdXBkYXRlKHZhbHVlLCB2YWx1ZUdyYXBoLCBtYXhWYWx1ZSwgbWF4R3JhcGgsIGRlY2ltYWxzID0gMCkge1xuICAgIGlmICghdGhpcy5jb250ZXh0IHx8ICF0aGlzLmdyYWRpZW50KVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKEluZmluaXR5LCB2YWx1ZSk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgobWF4VmFsdWUsIHZhbHVlKTtcbiAgICBtYXhHcmFwaCA9IE1hdGgubWF4KG1heEdyYXBoLCB2YWx1ZUdyYXBoKTtcbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJnO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLldJRFRILCB0aGlzLkdSQVBIX1kpO1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZnO1xuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChcbiAgICAgIGAke3ZhbHVlLnRvRml4ZWQoZGVjaW1hbHMpfSAke3RoaXMubmFtZX0gKCR7bWluLnRvRml4ZWQoZGVjaW1hbHMpfS0ke3BhcnNlRmxvYXQoXG4gICAgICAgIG1heC50b0ZpeGVkKGRlY2ltYWxzKVxuICAgICAgKX0pYCxcbiAgICAgIHRoaXMuVEVYVF9YLFxuICAgICAgdGhpcy5URVhUX1lcbiAgICApO1xuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmNhbnZhcyxcbiAgICAgIHRoaXMuR1JBUEhfWCArIHRoaXMuUFIsXG4gICAgICB0aGlzLkdSQVBIX1ksXG4gICAgICB0aGlzLkdSQVBIX1dJRFRIIC0gdGhpcy5QUixcbiAgICAgIHRoaXMuR1JBUEhfSEVJR0hULFxuICAgICAgdGhpcy5HUkFQSF9YLFxuICAgICAgdGhpcy5HUkFQSF9ZLFxuICAgICAgdGhpcy5HUkFQSF9XSURUSCAtIHRoaXMuUFIsXG4gICAgICB0aGlzLkdSQVBIX0hFSUdIVFxuICAgICk7XG4gICAgY29uc3QgY29sdW1uSGVpZ2h0ID0gdGhpcy5HUkFQSF9IRUlHSFQgLSAoMSAtIHZhbHVlR3JhcGggLyBtYXhHcmFwaCkgKiB0aGlzLkdSQVBIX0hFSUdIVDtcbiAgICBpZiAoY29sdW1uSGVpZ2h0ID4gMCkge1xuICAgICAgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmdyYWRpZW50O1xuICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICB0aGlzLkdSQVBIX1ggKyB0aGlzLkdSQVBIX1dJRFRIIC0gdGhpcy5QUixcbiAgICAgICAgdGhpcy5HUkFQSF9ZICsgdGhpcy5HUkFQSF9IRUlHSFQgLSBjb2x1bW5IZWlnaHQsXG4gICAgICAgIHRoaXMuUFIsXG4gICAgICAgIGNvbHVtbkhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydHMuUGFuZWwgPSBQYW5lbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhbmVsLmNqcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stats-gl/dist/panel.cjs\n");

/***/ })

};
;