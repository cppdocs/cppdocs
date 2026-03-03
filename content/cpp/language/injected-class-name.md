---
title: "Injected-class-name"
source_path: "cpp/language/injected-class-name"
category: "language"
---

The injected-class-name is the unqualified name of a class within the scope of said class.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1004 | C++98 | an injected-class-name could notbe a template template argument | allowed, it refers to the classtemplate itself in this case |
| CWG 2637 | C++98 | the entire template-id could be an injected-class-name | only the template name can |
