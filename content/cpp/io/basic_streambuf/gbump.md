---
title: "std::basic_streambuf<CharT,Traits>::gbump"
source_path: "cpp/io/basic_streambuf/gbump"
category: "io"
---

Skips count characters in the get area. This is done by adding count to the get pointer. No checks are done for underflow.

## Declarations
```cpp
protected:
void gbump( int count );
```

## Parameters
- `count`: number of characters to skip

## Return value
(none)

## Notes
Because this function takes an int, it cannot manipulate buffers larger than [std::numeric_limits](/cpp/types/numeric_limits/)<int>::max() characters ([LWG issue 255](https://cplusplus.github.io/LWG/issue255)).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 59 | C++98 | it was unclear whether gbump can be implemented ascalling sbumpc count times (which may check underflow) | only add countto the get pointer |

## See also
- [pbump](/cpp/io/basic_streambuf/pbump/)
