---
title: "SFINAE"
source_path: "cpp/language/sfinae"
category: "language"
---

"Substitution Failure Is Not An Error"

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 295 | C++98 | creating cv-qualified function typecould result in substitution failure | made not failure,discarding cv-qualification |
| CWG 1227 | C++98 | the order of substitution was unspecified | same as the lexical order |
| CWG 2054 | C++98 | substitution in partial specializations was not correctly specified | specified |
| CWG 2322 | C++11 | declarations in different lexical orders would cause templateinstantiations to occur in a different order or not at all | such case is ill-formed,no diagnostic required |
