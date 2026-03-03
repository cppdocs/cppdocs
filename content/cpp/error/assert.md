---
title: "assert"
source_path: "cpp/error/assert"
header: "<cassert>"
category: "error"
since: "C++26"
---

The definition of the macro assert depends on another macro, NDEBUG, which is not defined by the standard library.

## Declarations
```cpp
Disabled assertion
```

```cpp
#define assert(condition) ((void)0)
```
_(until C++26)_

```cpp
#define assert(...) ((void)0)
```
_(since C++26)_

```cpp
Enabled assertion
```

```cpp
#define assert(condition) /* unspecified */
```
_(until C++26)_

```cpp
#define assert(...) /* unspecified */
```
_(since C++26)_

## Parameters
- `condition`: expression of scalar type

## Notes
Because assert is a [function-like macro](/cpp/preprocessor/replace/), commas anywhere in the argument that are not protected by parentheses are interpreted as macro argument separators. Such commas are often found in template argument lists and list-initialization:

There is no standardized interface to add an additional message to assert errors. A portable way to include one is to use a [comma operator](/cpp/language/operator_other/#Built-in_comma_operator) provided it has not been [overloaded](/cpp/language/operators/), or use && with a string literal:

The implementation of assert in [Microsoft CRT](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/assert-macro-assert-wassert) does not conform to C++11 and later revisions, because its underlying function (_wassert) takes neither __func__ nor an equivalent replacement.

Since C++20, the values needed for the diagnostic message can also be obtained from [std::source_location::current()](/cpp/utility/source_location/current/).

Even though the change of assert in C23/C++26 is not formally a defect report, the C committee [recommends](https://www.open-std.org/jtc1/sc22/wg14/www/previous.html) implementations to backport the change to old modes.

## Example
```cpp
#include <iostream>
// uncomment to disable assert()
// #define NDEBUG
#include <cassert>
 
// Use (void) to silence unused warnings.
#define assertm(exp, msg) assert((void(msg), exp))
 
int main()
{
    assert(2 + 2 == 4);
    std::cout << "Checkpoint #1\n";
 
    assert((void("void helps to avoid 'unused value' warning"), 2 * 2 == 4));
    std::cout << "Checkpoint #2\n";
 
    assert((010 + 010 == 16) && "Yet another way to add an assert message");
    std::cout << "Checkpoint #3\n";
 
    assertm((2 + 2) % 3 == 1, "Success");
    std::cout << "Checkpoint #4\n";
 
    assertm(2 + 2 == 5, "Failed"); // assertion fails
    std::cout << "Execution continues past the last assert\n"; // No output
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2234 | C++11 | assert could not be used in constant expression | can be used |

## See also
- [static_assert declaration](/cpp/language/static_assert/)
- [abort](/cpp/utility/program/abort/)
- [C documentation](/c/error/assert/)
