---
title: "std::ios_base::width"
source_path: "cpp/io/ios_base/width"
category: "io"
---

Manages the minimum number of characters to generate on certain output operations and the maximum number of characters to generate on certain input operations.

## Declarations
```cpp
streamsize width() const;
```

```cpp
streamsize width( streamsize new_width );
```

## Parameters
- `new_width`: new field width setting

## Return value
The field width before the call to the function.

## Notes
Some I/O functions call width(0) before returning, see [std::setw](/cpp/io/manip/setw/) (this results in this field having effect on the next I/O function only, and not on any subsequent I/O).

The exact effects this modifier has on the input and output vary between the individual I/O functions and are described at each operator<< and operator>> overload page individually.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iomanip>
#include <iostream>
#include <span>
#include <string_view>
using namespace std::string_view_literals;
 
constexpr std::array table_header =
{
    "Language"sv, "Author"sv, "Birthdate"sv, "RIP date"sv
};
 
using row_t = std::array<std::string_view, table_header.size()>;
using widths_t = std::array<std::size_t, table_header.size()>;
 
constexpr std::array table_body = std::to_array<row_t>
({
    {"C", "Dennis Ritchie", "1941-09-09", "2011-10-12"},
    {"C++", "Bjarne Stroustrup", "1950-12-30"},
    {"C#", "Anders Hejlsberg", "1960-12-02"},
    {"Python", "Guido van Rossum", "1956-01-31"},
    {"Javascript", "Brendan Eich", "1961-07-04"}
});
 
constexpr widths_t calculate_column_widths(std::span<const row_t> table)
{
    widths_t widths{};
    for (const row_t& row : table)
        for (size_t i = 0; i != row.size(); ++i)
            widths[i] = std::max(widths[i], row[i].size());
    return widths;
}
 
void print_row(const row_t& row, const widths_t& widths)
{
    std::cout << '|';
    for (size_t i = 0; i != row.size(); ++i)
    {
        std::cout << ' ';
        std::cout.width(widths[i]);
        std::cout << row[i] << " |";
    }
    std::cout << '\n';
};
 
void print_break(const widths_t& widths)
{
    const std::size_t margin = 1;
    std::cout.put('+').fill('-');
    for (std::size_t w : widths)
    {
        std::cout.width(w + margin * 2);
        std::cout << '-' << '+';
    }
    std::cout.put('\n').fill(' ');
};
 
int main()
{
    constexpr widths_t widths = calculate_column_widths(table_body);
 
    std::cout.setf(std::ios::left, std::ios::adjustfield);
    print_break(widths);
    print_row(table_header, widths);
    print_break(widths);
    for (const row_t& row : table_body)
        print_row(row, widths);
    print_break(widths);
}
```

## See also
- [precision](/cpp/io/ios_base/precision/)
- [setw](/cpp/io/manip/setw/)
