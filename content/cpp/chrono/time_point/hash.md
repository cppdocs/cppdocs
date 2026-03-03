---
title: "std::hash<std::chrono::time_point>"
source_path: "cpp/chrono/time_point/hash"
header: "<chrono>"
category: "chrono"
since: "C++26"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::chrono::time_point](/cpp/chrono/time_point/) allows users to obtain hashes of objects of type [std::chrono::time_point](/cpp/chrono/time_point/)<Clock, Duration>. This specialization is [enabled](/cpp/utility/hash/) if and only if [std::hash](/cpp/utility/hash/)<Duration> is enabled.

## Declarations
```cpp
template< class Clock, class Duration >
struct hash<std::chrono::time_point<Clock, Duration>>;
```
_(since C++26)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_chrono
202306L
(C++26)
Hashing support for std::chrono value classes

## Example
```cpp
#include <chrono>
#include <cstddef>
#include <iostream>
#include <string>
#include <thread>
#include <unordered_map>
 
struct my_system_clock : std::chrono::system_clock
{
    using time_point = std::chrono::time_point<my_system_clock>;
 
    static time_point now() noexcept
    {
        return time_point{std::chrono::system_clock::now().time_since_epoch()};
    }
 
    template<class CharT, class Traits>
    friend auto operator<<(std::basic_ostream<CharT, Traits>& os, const time_point& tp)
        -> decltype(os)
    {
        return os << std::chrono::system_clock::time_point{tp.time_since_epoch()};
    }
};
 
using my_system_clock_tp = std::chrono::time_point<my_system_clock>;
 
#if __cpp_lib_chrono < 202306L
// custom specialization of std::hash can be injected in namespace std
template<>
struct std::hash<my_system_clock_tp>
{
    std::size_t operator()(const my_system_clock_tp& d) const noexcept
    {
        return d.time_since_epoch().count();
    }
};
#endif
 
int main()
{
    using namespace std::chrono_literals;
 
    std::unordered_map<my_system_clock_tp, std::string> log;
 
    for (int i{}; i != 4; ++i)
    {
        std::this_thread::sleep_for(100ms);
        log[my_system_clock::now()] = "event #" + std::to_string(i);
    }
 
    for (auto const& [time, message] : log)
        std::cout << '[' << time << "], message: " << message << '\n';
}
```

## See also
- [hash](/cpp/utility/hash/)
