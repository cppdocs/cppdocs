---
title: "std::basic_ofstream<CharT,Traits>::is_open"
source_path: "cpp/io/basic_ofstream/is_open"
category: "io"
---

Checks if the file stream has an associated file.

## Declarations
```cpp
bool is_open() const;
```

## Return value
true if the file stream has an associated file, false otherwise.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 365 | C++98 | is_open was not declared with const qualifier | declared with const qualifier |

## See also
- [open](/cpp/io/basic_ofstream/open/)
- [close](/cpp/io/basic_ofstream/close/)
