---
title: "C++ named requirements: CharTraits"
source_path: "cpp/named_req/CharTraits"
category: "named_req"
---

CharTraits is a traits class that abstracts basic character and string operations for a given character type. Most standard library string and input/output classes require a CharTraits template type parameter alongside a corresponding character template type parameter.

## Declarations
```cpp
template<> class char_traits<char>;
template<> class char_traits<wchar_t>;
template<> class char_traits<char8_t>;
template<> class char_traits<char16_t>;
template<> class char_traits<char32_t>;
```
_(since C++20)(since C++11)(since C++11)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 335 | C++98 | the requirements on the binary overload ofassign did not prevent assignments to rvalues | its first argumentcan only be an lvalue |
| LWG 352 | C++98 | X::state_type was onlyrequired to be CopyConstructible | it is also required to beCopyAssignable and DefaultConstructible |
| LWG 3085 | C++98 | X::copy(s, p, n) only required p notin [s, s + n), which is too weak[1] | requires [p, p + n) and[s, s + n) not to overlap |
