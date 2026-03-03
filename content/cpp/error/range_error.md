---
title: "std::range_error"
source_path: "cpp/error/range_error"
header: "<stdexcept>"
category: "error"
---

Defines a type of object to be thrown as exception. It can be used to report range errors (that is, situations where a result of a computation cannot be represented by the destination type).

## Declarations
```cpp
class range_error;
```

## Parameters
- `what_arg`: explanatory string
- `other`: another exception object to copy

## Return value
*this

## Notes
Because copying std::range_error is not permitted to throw exceptions, this message is typically stored internally as a separately-allocated reference-counted string. This is also why there is no constructor taking std::string&&: it would have to copy the content anyway.

Before the resolution of [LWG issue 254](https://cplusplus.github.io/LWG/issue254), the non-copy constructor can only accept [std::string](/cpp/string/basic_string/). It makes dynamic allocation mandatory in order to construct a [std::string](/cpp/string/basic_string/) object.

After the resolution of [LWG issue 471](https://cplusplus.github.io/LWG/issue471), a derived standard exception class must have a publicly accessible copy constructor. It can be implicitly defined as long as the explanatory strings obtained by what() are the same for the original object and the copied object.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 254 | C++98 | the constructor accepting const char* was missing | added |
| LWG 471 | C++98 | the explanatory strings of std::range_error'scopies were implementation-defined | they are the same as that of theoriginal std::range_error object |
