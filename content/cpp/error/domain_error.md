---
title: "std::domain_error"
source_path: "cpp/error/domain_error"
header: "<stdexcept>"
category: "error"
---

Defines a type of object to be thrown as exception. It may be used by the implementation to report domain errors, that is, situations where the inputs are outside of the domain on which an operation is defined.

## Declarations
```cpp
class domain_error;
```

## Parameters
- `what_arg`: explanatory string
- `other`: another exception object to copy

## Return value
*this

## Notes
Because copying std::domain_error is not permitted to throw exceptions, this message is typically stored internally as a separately-allocated reference-counted string. This is also why there is no constructor taking std::string&&: it would have to copy the content anyway.

Before the resolution of [LWG issue 254](https://cplusplus.github.io/LWG/issue254), the non-copy constructor can only accept [std::string](/cpp/string/basic_string/). It makes dynamic allocation mandatory in order to construct a [std::string](/cpp/string/basic_string/) object.

After the resolution of [LWG issue 471](https://cplusplus.github.io/LWG/issue471), a derived standard exception class must have a publicly accessible copy constructor. It can be implicitly defined as long as the explanatory strings obtained by what() are the same for the original object and the copied object.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 254 | C++98 | the constructor accepting const char* was missing | added |
| LWG 471 | C++98 | the explanatory strings of std::domain_error'scopies were implementation-defined | they are the same as that of theoriginal std::domain_error object |
