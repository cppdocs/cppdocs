---
title: "std::ios_base::Init"
source_path: "cpp/io/ios_base/Init"
category: "io"
---

This class is used to ensure that the default C++ streams ([std::cin](/cpp/io/cin/), [std::cout](/cpp/io/cout/), etc.) are properly initialized and destructed. The class tracks how many instances of it are created and initializes the C++ streams when the first instance is constructed as well as flushes the output streams when the last instance is destructed.

## Declarations
```cpp
class Init;
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1123 | C++98 | the behaviors of the constructor and the destructordepend on an exposition-only static data member init_cnt | removed the dependency |

## See also
- [cinwcin](/cpp/io/cin/)
- [stdin](/cpp/io/c/std_streams/)
- [coutwcout](/cpp/io/cout/)
- [stdout](/cpp/io/c/std_streams/)
- [cerrwcerr](/cpp/io/cerr/)
- [stderr](/cpp/io/c/std_streams/)
- [clogwclog](/cpp/io/clog/)
- [stderr](/cpp/io/c/std_streams/)
