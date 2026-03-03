---
title: "std::out_of_range"
source_path: "cpp/error/out_of_range"
header: "<stdexcept>"
category: "error"
---

Defines a type of object to be thrown as exception. It reports errors that are consequence of attempt to access elements out of defined range.

## Declarations
```cpp
class out_of_range;
```

## Parameters
- `what_arg`: explanatory string
- `other`: another exception object to copy

## Return value
*this

## Notes
Because copying std::out_of_range is not permitted to throw exceptions, this message is typically stored internally as a separately-allocated reference-counted string. This is also why there is no constructor taking std::string&&: it would have to copy the content anyway.

Before the resolution of [LWG issue 254](https://cplusplus.github.io/LWG/issue254), the non-copy constructor can only accept [std::string](/cpp/string/basic_string/). It makes dynamic allocation mandatory in order to construct a [std::string](/cpp/string/basic_string/) object.

After the resolution of [LWG issue 471](https://cplusplus.github.io/LWG/issue471), a derived standard exception class must have a publicly accessible copy constructor. It can be implicitly defined as long as the explanatory strings obtained by what() are the same for the original object and the copied object.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 254 | C++98 | the constructor accepting const char* was missing | added |
| LWG 471 | C++98 | the explanatory strings of std::out_of_range'scopies were implementation-defined | they are the same as that of theoriginal std::out_of_range object |

## See also
- [at](/cpp/string/basic_string/at/)
- [at](/cpp/string/basic_string_view/at/)
- [at](/cpp/container/deque/at/)
- [at](/cpp/container/map/at/)
- [at](/cpp/container/unordered_map/at/)
- [at](/cpp/container/vector/at/)
- [at](/cpp/container/array/at/)
- [at](/cpp/container/span/at/)
