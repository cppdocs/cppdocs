---
title: "Formatting library (since C++20)"
source_path: "cpp/utility/format"
category: "utility"
since: "C++20"
---

The text formatting library offers a safe and extensible alternative to the printf family of functions. It is intended to complement the existing C++ I/O streams library.

## Declarations
```cpp
template< class R, class CharT >
concept /*const-formattable-range*/ =
ranges::input_range<const R> &&
std::formattable<ranges::range_reference_t<const R>, CharT>;
```
_(exposition only*)_

```cpp
template< class R, class CharT >
using /*fmt-maybe-const*/ =
std::conditional_t</*const-formattable-range*/<R, CharT>, const R, R>;
```
_(exposition only*)_

## Notes
We intentionally treat the addition of std::basic_format_string ([P2508](https://wg21.link/P2508)) as a defect report because all known implementations make these components available in C++20 mode, although it is not so categorized officially.

## Example
```cpp
#include <cassert>
#include <format>
 
int main()
{
    std::string message = std::format("The answer is {}.", 42);
    assert(message == "The answer is 42.");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2418R2 | C++20 | objects that are neither const-formattable nor copyable(such as generator-like objects) are not formattable | allow formatting these objects(relaxed formatter requirements) |
| P2508R1 | C++20 | there's no user-visible name for this facility | the name basic_format_string is exposed |

## See also
- [print](/cpp/io/print/)
- [stdout](/cpp/io/c/std_streams/)
- [println](/cpp/io/println/)
- [print(std::ostream)](/cpp/io/basic_ostream/print/)
