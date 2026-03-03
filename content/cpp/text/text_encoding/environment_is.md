---
title: "std::text_encoding::environment_is"
source_path: "cpp/text/text_encoding/environment_is"
category: "text"
since: "C++26"
---

Checks whether the [environment encoding](/cpp/text/text_encoding/environment/) is equal to the encoding whose MIBenum value is the specified value I. A call to this function is equivalent to return environment() == I;.

## Declarations
```cpp
template< id I >
static bool environment_is();
```
_(since C++26)_

## Return value
true if environment() is equal to I; false otherwise.

## Example
This section is incompleteReason: no example
