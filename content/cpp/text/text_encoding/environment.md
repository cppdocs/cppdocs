---
title: "std::text_encoding::environment"
source_path: "cpp/text/text_encoding/environment"
category: "text"
since: "C++26"
---

Constructs a new text_encoding object representing the environment encoding that refers to the implementation-defined character encoding scheme of the execution environment. The execution environment at runtime is the [environment](/cpp/language/main_function/) in which the program is run.

## Declarations
```cpp
static text_encoding environment();
```
_(since C++26)_

## Return value
The object holding the representation of the environment character encoding.

## Notes
The environment encoding may differ from the global locale-associated encoding that is accessible via [std::locale](/cpp/locale/locale/)().encoding().

On Windows platforms, the environment encoding can be determined by [GetACP()](https://learn.microsoft.com/en-us/windows/win32/api/winnls/nf-winnls-getacp) and then mapped to MIBenum values.

On POSIX platforms, the environment encoding is associated with the POSIX locale "" which can be implemented to correspond to a value of [nl_langinfo_l()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/nl_langinfo.html) when the environment locale "" is set before the [global C++ locale](/cpp/locale/locale/global/) is set to "C" at program startup.

## Example
This section is incompleteReason: no example

## See also
- [encoding](/cpp/locale/locale/encoding/)
