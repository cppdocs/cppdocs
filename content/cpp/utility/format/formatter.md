---
title: "std::formatter"
source_path: "cpp/utility/format/formatter"
header: "<format>"
category: "utility"
since: "C++20"
---

The enabled specializations of std::formatter define formatting rules for a given type. Enabled specializations meet the [BasicFormatter](/cpp/named_req/basicformatter/) requirements, and, unless otherwise specified, also meet the [Formatter](/cpp/named_req/formatter/) requirements.

## Declarations
```cpp
template< class T, class CharT = char >
struct formatter;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <format>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string_view>
 
struct QuotableString : std::string_view
{};
 
template<>
struct std::formatter<QuotableString, char>
{
    bool quoted = false;
 
    template<class ParseContext>
    constexpr ParseContext::iterator parse(ParseContext& ctx)
    {
        auto it = ctx.begin();
        if (it == ctx.end())
            return it;
 
        if (*it == '#')
        {
            quoted = true;
            ++it;
        }
        if (it != ctx.end() && *it != '}')
            throw std::format_error("Invalid format args for QuotableString.");
 
        return it;
    }
 
    template<class FmtContext>
    FmtContext::iterator format(QuotableString s, FmtContext& ctx) const
    {
        std::ostringstream out;
        if (quoted)
            out << std::quoted(s);
        else
            out << s;
 
        return std::ranges::copy(std::move(out).str(), ctx.out()).out;
    }
};
 
int main()
{
    QuotableString a("be"), a2(R"( " be " )");
    QuotableString b("a question");
    std::cout << std::format("To {0} or not to {0}, that is {1}.\n", a, b);
    std::cout << std::format("To {0:} or not to {0:}, that is {1:}.\n", a, b);
    std::cout << std::format("To {0:#} or not to {0:#}, that is {1:#}.\n", a2, b);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3944 | C++23 | some char sequences were formattable as ranges of wchar_t | disable specializations added |

## See also
- [basic_format_contextformat_contextwformat_context](/cpp/utility/format/basic_format_context/)
- [formattable](/cpp/utility/format/formattable/)
- [range_formatter](/cpp/utility/format/range_formatter/)
