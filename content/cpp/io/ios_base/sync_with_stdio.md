---
title: "std::ios_base::sync_with_stdio"
source_path: "cpp/io/ios_base/sync_with_stdio"
category: "io"
---

Sets whether the standard C++ streams are synchronized to the standard C streams after each input/output operation.

## Declarations
```cpp
static bool sync_with_stdio( bool sync = true );
```

## Parameters
- `sync`: the new synchronization setting

## Return value
Synchronization state before the call to the function.

## Example
```cpp
#include <cstdio>
#include <iostream>
 
int main()
{
    std::ios::sync_with_stdio(false);
    std::cout << "a\n";
    std::printf("b\n");
    std::cout << "c\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 49 | C++98 | it was unspecified (1) which state is actually returned and(2) what does 'synchronized' between standard C and C++ streams mean | both specified |

## See also
- [coutwcout](/cpp/io/cout/)
- [stdout](/cpp/io/c/std_streams/)
- [cerrwcerr](/cpp/io/cerr/)
- [stderr](/cpp/io/c/std_streams/)
- [clogwclog](/cpp/io/clog/)
- [stderr](/cpp/io/c/std_streams/)
