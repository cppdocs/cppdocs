---
title: "Extending the namespace std"
source_path: "cpp/language/extending_std"
category: "language"
---

[1 Adding declarations to std](#Adding_declarations_to_std)

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 120 | C++98 | users could explicitly instantiate standardlibrary templates for non-user defined types | prohibited |
| LWG 232 | C++98 | users could explicitly specialize standard library templatesif the declaration depends on a user-defined name ofexternal linkage (which can refer to a non-user-defined type) | only allowed foruser-defined types |
| LWG 422 | C++98 | users could specialize individual members or member templateswithout specializing the whole standard library class or class template | the behavior isundefined in this case |
