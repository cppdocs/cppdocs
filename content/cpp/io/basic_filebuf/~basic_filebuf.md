---
title: "std::basic_filebuf<CharT,Traits>::~basic_filebuf"
source_path: "cpp/io/basic_filebuf/~basic_filebuf"
category: "io"
---

Calls [close()](/cpp/io/basic_filebuf/close/) to close the associated file and destructs all other members of basic_filebuf. If an exception occurs during the destruction of the object, including the call to [close()](/cpp/io/basic_filebuf/close/), it is caught and not rethrown.

## Declarations
```cpp
virtual ~basic_filebuf();
```

## Return value
(none)

## Notes
Typically called by the destructor of [std::basic_fstream](/cpp/io/basic_fstream/).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 622 | C++98 | it was unclear how to handle the exception thrown during destruction | it is caught but not rethrown |

## See also
- [(constructor)](/cpp/io/basic_filebuf/basic_filebuf/)
- [close](/cpp/io/basic_filebuf/close/)
