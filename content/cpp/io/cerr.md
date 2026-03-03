---
title: "std::cerr, std::wcerr"
source_path: "cpp/io/cerr"
header: "<iostream>"
category: "io"
---

The global objects std::cerr and std::wcerr control output to a stream buffer of implementation-defined type (derived from [std::streambuf](/cpp/io/basic_streambuf/) and [std::wstreambuf](/cpp/io/basic_streambuf/), respectively), associated with the standard C error output stream [stderr](/cpp/io/c/std_streams/).

## Declarations
```cpp
extern std::ostream cerr;
```

```cpp
extern std::wostream wcerr;
```

## Notes
The 'c' in the name refers to "character" ([stroustrup.com FAQ](https://www.stroustrup.com/bs_faq2.html#cout)); cerr means "character error (stream)" and wcerr means "wide character error (stream)".

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
using namespace std::chrono_literals;
 
void f()
{
    std::cout << "Output from thread...";
    std::this_thread::sleep_for(2s);
    std::cout << "...thread calls flush()" << std::endl;
}
 
int main()
{
    std::jthread t1{f};
    std::this_thread::sleep_for(1000ms);
    std::clog << "This output from main is not tie()'d to cout\n";
    std::cerr << "This output is tie()'d to cout\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 455 | C++98 | std::cerr.tie() andstd::wcerr.tie() returned null pointers | they return &std::cout and&std::wcout respectively |

## See also
- [Init](/cpp/io/ios_base/init/)
- [clogwclog](/cpp/io/clog/)
- [stderr](/cpp/io/c/std_streams/)
- [coutwcout](/cpp/io/cout/)
- [stdout](/cpp/io/c/std_streams/)
- [stdinstdoutstderr](/cpp/io/c/std_streams/)
