---
title: "Expressions"
source_path: "cpp/language/expressions"
category: "language"
---

An expression is a sequence of operators and their operands, that specifies a computation.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1054 | C++98 | assigning a value to a volatile variable mightresult in an unnecessary read due to the lvalue-to-rvalue conversion applied to the assignment result | introduce discarded-value expressionsand exclude this case from the listof cases that require the conversion |
| CWG 1343 | C++98 | sequencing of destructor calls inaggregate initialization was underspecified | full-expressions in aggregate initializationare well-specified |
| CWG 1383 | C++98 | the list of expressions where lvalue-to-rvalueconversion is applied to discarded-valueexpressions also covered overloaded operators | only cover operatorswith built-in meaning |
| CWG 1576 | C++11 | lvalue-to-rvalue conversions were not appliedto discarded-value volatile xvalue expressions | apply the conversionin this case |
| CWG 2249 | C++98 | identifiers to be declared in declaratorswere not id-expressions | they are |
| CWG 2431 | C++11 | the invocations of the destructors of temporaries thatare bound to references were not full-expressions | they are |

## See also
- [C documentation](/c/language/expressions/)
