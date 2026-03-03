---
title: "Usual arithmetic conversions"
source_path: "cpp/language/usual_arithmetic_conversions"
category: "language"
---

Many binary operators that expect operands of [arithmetic](/cpp/language/type-id/) or [enumeration](/cpp/language/enum/) type cause conversions and yield result types in a similar way. The purpose is to yield a common type, which is also the type of the result. This pattern is called the usual arithmetic conversions.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1642 | C++98 | usual arithmetic conversions might involve lvalues | applies lvalue-to-rvalue conversions first |
| CWG 2528 | C++20 | the three-way comparison between unsigned charand unsigned int is ill-formed becauseof the intermediate integral promotion[1] | determines the common type basedon the promoted types, withoutactually promoting the operands[2] |
| CWG 2892 | C++98 | when both operands are of the samefloating-point type, the meaning of “nofurther conversion is needed” was unclear | changed to “no furtherconversion will be performed” |
