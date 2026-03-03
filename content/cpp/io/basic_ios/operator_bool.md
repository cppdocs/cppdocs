---
title: "std::basic_ios<CharT,Traits>::operator bool"
source_path: "cpp/io/basic_ios/operator_bool"
aliases:
  - "/cpp/io/basic_ios/operator!/"
category: "io"
since: "C++11"
---

Checks whether the stream has no errors.

## Declarations
```cpp
operator /* unspecified-boolean-type */() const;
```
_(until C++11)_

```cpp
explicit operator bool() const;
```
_(since C++11)_

## Notes
This conversion can be used in contexts where a bool is expected (e.g. an [if condition](/cpp/language/if/)). However, [implicit conversions](/cpp/language/implicit_cast/) (e.g. to int) that can occur with bool are not allowed.

In C++98, operator bool could not be provided directly due to [the safe bool problem](/cpp/language/implicit_cast/). The initial solution in C++98 is to provide operator void*, which returns a null pointer if fail() returns true or a non-null pointer otherwise. It is replaced by the resolution of [LWG issue 468](https://cplusplus.github.io/LWG/issue468), which allows [Safe Bool idiom](https://en.wikibooks.org/wiki/More_C%2B%2B_Idioms/Safe_bool) to be applied.

Since C++11, conversion functions can be [explicit](/cpp/language/explicit/). The resolution of [LWG issue 1094](https://cplusplus.github.io/LWG/issue1094) introduced the explicit operator bool and the boolean conversion is now safe.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::istringstream s("1 2 3 error");
    int n;
 
    std::cout << std::boolalpha << "s is " << static_cast<bool>(s) << '\n';
    while (s >> n)
        std::cout << n << '\n';
    std::cout << "s is " << static_cast<bool>(s) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 468 | C++98 | operator void* was provided | a conversion function to an unspecified boolean type is provided instead |

## See also
- [basic_ios](/cpp/io/basic_ios/)
- [good()](/cpp/io/basic_ios/good/)
- [fail()](/cpp/io/basic_ios/fail/)
- [ios_base::iostate](/cpp/io/ios_base/iostate/)
- [ios_base::iostate](/cpp/io/ios_base/iostate/)
- [good()](/cpp/io/basic_ios/good/)
- [fail()](/cpp/io/basic_ios/fail/)
- [bad()](/cpp/io/basic_ios/bad/)
- [eof()](/cpp/io/basic_ios/eof/)
- [operator!]()
