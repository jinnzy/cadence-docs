(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{432:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[t._v("#")]),t._v(" Queries")]),t._v(" "),a("p",[t._v("Query is to expose this internal state to the external world Cadence provides a synchronous "),a("Term",{attrs:{term:"query"}}),t._v(" feature. From the "),a("Term",{attrs:{term:"workflow"}}),t._v(" implementer point of view the "),a("Term",{attrs:{term:"query"}}),t._v(" is exposed as a synchronous callback that is invoked by external entities. Multiple such callbacks can be provided per "),a("Term",{attrs:{term:"workflow"}}),t._v(" type exposing different information to different external systems.")],1),t._v(" "),a("p",[a("Term",{attrs:{term:"query",show:"Query"}}),t._v(" callbacks must be read-only not mutating the "),a("Term",{attrs:{term:"workflow"}}),t._v(" state in any way. The other limitation is that the "),a("Term",{attrs:{term:"query"}}),t._v(" callback cannot contain any blocking code. Both above limitations rule out ability to invoke "),a("Term",{attrs:{term:"activity",show:"activities"}}),t._v(" from the "),a("Term",{attrs:{term:"query"}}),t._v(" handlers.")],1),t._v(" "),a("h2",{attrs:{id:"built-in-query-stack-trace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-query-stack-trace"}},[t._v("#")]),t._v(" Built-in Query: Stack Trace")]),t._v(" "),a("p",[t._v("If a "),a("Term",{attrs:{term:"workflow_execution"}}),t._v(" has been stuck at a state for longer than an expected period of time, you\nmight want to "),a("Term",{attrs:{term:"query"}}),t._v(" the current call stack. You can use the Cadence "),a("Term",{attrs:{term:"CLI"}}),t._v(" to perform this "),a("Term",{attrs:{term:"query"}}),t._v(". For\nexample:")],1),t._v(" "),a("p",[a("code",[t._v("cadence-cli --domain samples-domain workflow query -w my_workflow_id -r my_run_id -qt __stack_trace")])]),t._v(" "),a("p",[t._v("This command uses "),a("code",[t._v("__stack_trace")]),t._v(", which is a built-in "),a("Term",{attrs:{term:"query"}}),t._v(" type supported by the Cadence client\nlibrary. You can add custom "),a("Term",{attrs:{term:"query"}}),t._v(" types to handle "),a("Term",{attrs:{term:"query",show:"queries"}}),t._v(" such as "),a("Term",{attrs:{term:"query",show:"querying"}}),t._v(" the current state of a\n"),a("Term",{attrs:{term:"workflow"}}),t._v(", or "),a("Term",{attrs:{term:"query",show:"querying"}}),t._v(" how many "),a("Term",{attrs:{term:"activity",show:"activities"}}),t._v(" the "),a("Term",{attrs:{term:"workflow"}}),t._v(" has completed.")],1),t._v(" "),a("h2",{attrs:{id:"customized-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customized-query"}},[t._v("#")]),t._v(" Customized Query")]),t._v(" "),a("p",[t._v("Cadence provides a "),a("Term",{attrs:{term:"query"}}),t._v(" feature that supports synchronously returning any information from a "),a("Term",{attrs:{term:"workflow"}}),t._v(" to an external caller.")],1),t._v(" "),a("p",[t._v("Interface "),a("a",{attrs:{href:"https://www.javadoc.io/doc/com.uber.cadence/cadence-client/latest/com/uber/cadence/workflow/QueryMethod.html",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("QueryMethod")]),a("OutboundLink")],1),t._v(" indicates that the method is a query method. Query method can be used to query a workflow state by external process at any time during its execution. This annotation applies only to workflow interface methods.")]),t._v(" "),a("p",[t._v("See the "),a("a",{attrs:{href:"https://github.com/uber/cadence-java-samples/blob/master/src/main/java/com/uber/cadence/samples/hello/HelloQuery.java",target:"_blank",rel:"noopener noreferrer"}},[a("Term",{attrs:{term:"workflow"}}),a("OutboundLink")],1),t._v(" example code :")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@WorkflowMethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SignalMethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateGreeting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@QueryMethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldImpl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bye"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('": "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" oldGreeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Workflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("await")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldGreeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('": "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateGreeting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The new "),a("code",[t._v("getCount")]),t._v(" method annotated with "),a("code",[t._v("@QueryMethod")]),t._v(" was added to the "),a("Term",{attrs:{term:"workflow"}}),t._v(" interface definition. It is allowed\nto have multiple "),a("Term",{attrs:{term:"query"}}),t._v(" methods per "),a("Term",{attrs:{term:"workflow"}}),t._v(" interface.")],1),t._v(" "),a("p",[t._v("The main restriction on the implementation of the "),a("Term",{attrs:{term:"query"}}),t._v(" method is that it is not allowed to modify "),a("Term",{attrs:{term:"workflow"}}),t._v(" state in any form.\nIt also is not allowed to block its thread in any way. It usually just returns a value derived from the fields of the "),a("Term",{attrs:{term:"workflow"}}),t._v(" object.")],1),t._v(" "),a("h2",{attrs:{id:"run-query-from-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-query-from-command-line"}},[t._v("#")]),t._v(" Run Query from Command Line")]),t._v(" "),a("p",[t._v("Let's run the updated "),a("Term",{attrs:{term:"worker"}}),t._v(" and send a couple "),a("Term",{attrs:{term:"signal",show:"signals"}}),t._v(" to it:")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence: docker run --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host --rm ubercadence/cli:master --do test-domain workflow start  --workflow_id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloQuery"')]),t._v(" --tasklist HelloWorldTaskList --workflow_type HelloWorld::sayHello --execution_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v(" --input "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"World'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"\nStarted Workflow Id: HelloQuery, run Id: 1925f668-45b5-4405-8cba-74f7c68c3135\ncadence: docker run --network'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host --rm ubercadence/cli:master --do test-domain workflow signal --workflow_id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloQuery"')]),t._v(" --name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloWorld::updateGreeting"')]),t._v(" --input "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"Hi'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"\nSignal workflow succeeded.\ncadence: docker run --network'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host --rm ubercadence/cli:master --do test-domain workflow signal --workflow_id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloQuery"')]),t._v(" --name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloWorld::updateGreeting"')]),t._v(" --input "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"Welcome'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"\nSignal workflow succeeded.\n')])])]),a("p",[t._v("The "),a("Term",{attrs:{term:"worker"}}),t._v(" output:")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":35:50.485 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("workflow-root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" INFO  c.u.c.samples.hello.GettingStarted - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": Hello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":36:10.483 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("workflow-root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" INFO  c.u.c.samples.hello.GettingStarted - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": Hi World"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":36:16.204 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("workflow-root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" INFO  c.u.c.samples.hello.GettingStarted - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": Welcome World"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),a("p",[t._v("Now let's "),a("Term",{attrs:{term:"query"}}),t._v(" the "),a("Term",{attrs:{term:"workflow"}}),t._v(" using the "),a("Term",{attrs:{term:"CLI",show:""}})],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence: docker run --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host --rm ubercadence/cli:master --do test-domain workflow query --workflow_id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloQuery"')]),t._v(" --query_type "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloWorld::getCount"')]),t._v("\n:query:Query: result as JSON:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),a("p",[t._v("One limitation of the "),a("Term",{attrs:{term:"query"}}),t._v(" is that it requires a "),a("Term",{attrs:{term:"worker"}}),t._v(" process running because it is executing callback code.\nAn interesting feature of the "),a("Term",{attrs:{term:"query"}}),t._v(" is that it works for completed "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" as well. Let's complete the "),a("Term",{attrs:{term:"workflow"}}),t._v(' by sending "Bye" and '),a("Term",{attrs:{term:"query"}}),t._v(" it.")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence: docker run --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host --rm ubercadence/cli:master --do test-domain workflow signal --workflow_id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloQuery"')]),t._v(" --name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloWorld::updateGreeting"')]),t._v(" --input "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"Bye'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"\nSignal workflow succeeded.\ncadence: docker run --network'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host --rm ubercadence/cli:master --do test-domain workflow query --workflow_id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloQuery"')]),t._v(" --query_type "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloWorld::getCount"')]),t._v("\n:query:Query: result as JSON:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])]),a("p",[t._v("The "),a("Term",{attrs:{term:"query",show:"Query"}}),t._v(" method can accept parameters. This might be useful if only part of the "),a("Term",{attrs:{term:"workflow"}}),t._v(" state should be returned.")],1),t._v(" "),a("h2",{attrs:{id:"run-query-from-external-application-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-query-from-external-application-code"}},[t._v("#")]),t._v(" Run Query from external application code")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://www.javadoc.io/static/com.uber.cadence/cadence-client/2.7.9-alpha/com/uber/cadence/client/WorkflowClient.html#newWorkflowStub-java.lang.Class-java.lang.String-",target:"_blank",rel:"noopener noreferrer"}},[t._v("WorkflowStub"),a("OutboundLink")],1),t._v(" without WorkflowOptions is for signal or [query](/docs/java-client/queries")]),t._v(" "),a("h2",{attrs:{id:"consistent-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consistent-query"}},[t._v("#")]),t._v(" Consistent Query")]),t._v(" "),a("p",[a("Term",{attrs:{term:"query",show:"Query"}}),t._v(" has two consistency levels, eventual and strong. Consider if you were to "),a("Term",{attrs:{term:"signal"}}),t._v(" a "),a("Term",{attrs:{term:"workflow"}}),t._v(" and then\nimmediately "),a("Term",{attrs:{term:"query"}}),t._v(" the "),a("Term",{attrs:{term:"workflow",show:""}})],1),t._v(" "),a("p",[a("code",[t._v("cadence-cli --domain samples-domain workflow signal -w my_workflow_id -r my_run_id -n signal_name -if ./input.json")])]),t._v(" "),a("p",[a("code",[t._v("cadence-cli --domain samples-domain workflow query -w my_workflow_id -r my_run_id -qt current_state")])]),t._v(" "),a("p",[t._v("In this example if "),a("Term",{attrs:{term:"signal"}}),t._v(" were to change "),a("Term",{attrs:{term:"workflow"}}),t._v(" state, "),a("Term",{attrs:{term:"query"}}),t._v(" may or may not see that state update reflected\nin the "),a("Term",{attrs:{term:"query"}}),t._v(" result. This is what it means for "),a("Term",{attrs:{term:"query"}}),t._v(" to be eventually consistent.")],1),t._v(" "),a("p",[a("Term",{attrs:{term:"query",show:"Query"}}),t._v(" has another consistency level called strong consistency. A strongly consistent "),a("Term",{attrs:{term:"query"}}),t._v(" is guaranteed\nto be based on "),a("Term",{attrs:{term:"workflow"}}),t._v(" state which includes all "),a("Term",{attrs:{term:"event",show:"events"}}),t._v(" that came before the "),a("Term",{attrs:{term:"query"}}),t._v(" was issued. An "),a("Term",{attrs:{term:"event"}}),t._v("\nis considered to have come before a "),a("Term",{attrs:{term:"query"}}),t._v(" if the call creating the external "),a("Term",{attrs:{term:"event"}}),t._v(" returned success before\nthe "),a("Term",{attrs:{term:"query"}}),t._v(" was issued. External "),a("Term",{attrs:{term:"event",show:"events"}}),t._v(" which are created while the "),a("Term",{attrs:{term:"query"}}),t._v(" is outstanding may or may not\nbe reflected in the "),a("Term",{attrs:{term:"workflow"}}),t._v(" state the "),a("Term",{attrs:{term:"query"}}),t._v(" result is based on.")],1),t._v(" "),a("p",[t._v("In order to run consistent "),a("Term",{attrs:{term:"query"}}),t._v(" through the "),a("Term",{attrs:{term:"CLI"}}),t._v(" do the following:")],1),t._v(" "),a("p",[a("code",[t._v("cadence-cli --domain samples-domain workflow query -w my_workflow_id -r my_run_id -qt current_state --qcl strong")])]),t._v(" "),a("p",[t._v("In order to run a "),a("Term",{attrs:{term:"query"}}),t._v(" using application code, you need to use "),a("a",{attrs:{href:"https://www.javadoc.io/doc/com.uber.cadence/cadence-client/latest/com/uber/cadence/WorkflowService.Iface.html#SignalWorkflowExecution-com.uber.cadence.SignalWorkflowExecutionRequest-",target:"_blank",rel:"noopener noreferrer"}},[t._v("service client"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("p",[t._v("When using strongly consistent "),a("Term",{attrs:{term:"query"}}),t._v(" you should expect higher latency than eventually consistent "),a("Term",{attrs:{term:"query"}}),t._v(".")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);