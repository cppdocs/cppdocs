---
title: "std::ranges::views::istream, std::ranges::basic_istream_view, std::ranges::istream_view, std::ranges::wistream_view"
source_path: "cpp/ranges/basic_istream_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range factory that generates a sequence of elements by repeatedly calling operator>>.

## Declarations
```cpp
template< std::movable Val, class CharT,
class Traits = std::char_traits<CharT> >
requires std::default_initializable<Val> &&
/*stream-extractable*/<Val, CharT, Traits>
class basic_istream_view
: public ranges::view_interface<basic_istream_view<Val, CharT, Traits>>
```
_(since C++20)_

```cpp
Helper templates
```

```cpp
template< class Val >
using istream_view = ranges::basic_istream_view<Val, char>;
```
_(since C++20)_

```cpp
template< class Val >
using wistream_view = ranges::basic_istream_view<Val, wchar_t>;
```
_(since C++20)_

```cpp
Customization point objects
```

```cpp
namespace views {
template< class T >
constexpr /* unspecified */ istream = /* unspecified */;
}
```
_(since C++20)_

```cpp
Helper concepts
```

```cpp
template< class Val, class CharT, class Traits >
concept /*stream-extractable*/ =
requires(std::basic_istream<CharT, Traits>& is, Val& t) {
is >> t;
};
```
_(exposition only*)_

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <ranges>
#include <sstream>
#include <string>
 
int main()
{
    auto words = std::istringstream{"today is yesterday’s tomorrow"};
    for (const auto& s : std::views::istream<std::string>(words))
        std::cout << std::quoted(s, '/') << ' ';
    std::cout << '\n';
 
    auto floats = std::istringstream{"1.1  2.2\t3.3\v4.4\f55\n66\r7.7  8.8"};
    std::ranges::copy
    (
        std::views::istream<float>(floats),
        std::ostream_iterator<float>{std::cout, ", "}
    );
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3568 | C++20 | P2325R3 accidentally made the stored value default-initialized | restored to value-initialization |
| P2325R3 | C++20 | default constructor was provided asview must be default_initializable | removed along withthe requirement |
| P2432R1 | C++20 | ranges::istream_view was a function templateand did not follow the naming convention | made an alias template;customization point objects added |

## See also
- [istream_iterator](/cpp/iterator/istream_iterator/)
- [std::basic_istream](/cpp/io/basic_istream/)
