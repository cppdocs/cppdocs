---
title: "std::formattable"
source_path: "cpp/utility/format/formattable"
header: "<format>"
category: "utility"
since: "C++23"
---

The concept formattable specifies that [std::formatter](/cpp/utility/format/formatter/)<[std::remove_cvref_t](/cpp/types/remove_cvref/)<T>, CharT> meets the requirements of [BasicFormatter](/cpp/named_req/basicformatter/) and [Formatter](/cpp/named_req/formatter/) (if [std::remove_reference_t](/cpp/types/remove_reference/)<T> is const-qualified).

## Declarations
```cpp
template< class T, class CharT >
concept formattable = /* formattable_with */<
std::remove_reference_t<T>,
std::basic_format_context</* fmt_iter_for */<CharT>, CharT>
>;
```
_(since C++23)_

```cpp
Helper templates
```

```cpp
template< class CharT >
using /* fmt_iter_for */ = /* unspecified */;
```
_(exposition only*)_

```cpp
template< class T, class Context,
class Formatter =
typename Context::template
formatter_type<std::remove_const_t<T>> >
concept /* formattable_with */ =
std::semiregular<Formatter> &&
requires (Formatter& f, const Formatter& cf, T&& t, Context fc,
std::basic_format_parse_context<
typename Context::char_type
> pc) {
{ f.parse(pc) } -> std::same_as<typename decltype(pc)::iterator>;
{ cf.format(t, fc) } -> std::same_as<typename Context::iterator>;
};
```
_(exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3925 | C++23 | the second template argument of std::basic_format_context was not provided | provided |

## See also
- [formatter](/cpp/utility/format/formatter/)
- [BasicFormatter](/cpp/named_req/basicformatter/)
- [Formatter](/cpp/named_req/formatter/)
- [formatting library](/cpp/utility/format/)
