(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{396:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"golang-hello-world"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#golang-hello-world"}},[t._v("#")]),t._v(" Golang Hello World")]),t._v(" "),s("p",[t._v("This section only describe how to write and run a HelloWorld with Golang. Go to "),s("a",{attrs:{href:"https://github.com/uber-common/cadence-samples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cadence-Samples"),s("OutboundLink")],1),t._v(" for more examples, and "),s("a",{attrs:{href:"https://github.com/uber-go/cadence-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cadence-Client"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://pkg.go.dev/go.uber.org/cadence",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-docs"),s("OutboundLink")],1),t._v(" for more documentation.")]),t._v(" "),s("h2",{attrs:{id:"include-golang-cadence-client-dependency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-golang-cadence-client-dependency"}},[t._v("#")]),t._v(" Include Golang cadence-client dependency")]),t._v(" "),s("p",[t._v("Add cadence-client library to your project by running the command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go get go.uber.org/cadence\n")])])]),s("h2",{attrs:{id:"implement-helloworld-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implement-helloworld-workflow"}},[t._v("#")]),t._v(" Implement HelloWorld Workflow")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"context"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.uber.org/cadence/activity"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.uber.org/cadence/workflow"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.uber.org/zap"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * This is the hello world workflow sample.\n */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ApplicationName is the task list for this sample")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ApplicationName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helloWorldGroup"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// helloWorkflow workflow decider")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("helloWorldWorkflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tao "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActivityOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tScheduleToStartTimeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tStartToCloseTimeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tHeartbeatTimeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithActivityOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tlogger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlogger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helloworld workflow started"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" helloworldResult "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\terr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" helloWorldActivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("helloworldResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlogger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Activity failed."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tlogger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Workflow completed."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Result"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" helloworldResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("helloWorldActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlogger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlogger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helloworld activity started"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"implement-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implement-worker"}},[t._v("#")]),t._v(" Implement Worker")]),t._v(" "),s("p",[t._v("Follow the "),s("a",{attrs:{href:"/docs/go-client/workers"}},[t._v("worker documentation")]),t._v(" or the "),s("a",{attrs:{href:"https://github.com/uber-common/cadence-samples/blob/master/cmd/samples/recipes/helloworld/main.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("samples"),s("OutboundLink")],1),t._v(" to implement the worker.")]),t._v(" "),s("h2",{attrs:{id:"start-the-worker-and-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-the-worker-and-workflow"}},[t._v("#")]),t._v(" Start the Worker and Workflow")]),t._v(" "),s("p",[t._v("Build the worker program with your project. You can follow the way in the "),s("a",{attrs:{href:"https://github.com/uber-common/cadence-samples",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Then start the worker:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./bin/helloworld -m worker\n")])])]),s("p",[t._v("And start a workflow:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./bin/helloworld\n")])])]),s("h1",{attrs:{id:"what-is-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-next"}},[t._v("#")]),t._v(" What is Next")]),t._v(" "),s("p",[t._v("Now you have completed the tutorials. You can continue to explore the key "),s("a",{attrs:{href:"/docs/concepts"}},[t._v("concepts")]),t._v(" in Cadence, and also how to use them with "),s("a",{attrs:{href:"/docs/go-client"}},[t._v("Go Client")])])])}),[],!1,null,null,null);a.default=e.exports}}]);