---
title: "std::ios_base::register_callback"
source_path: "cpp/io/ios_base/register_callback"
category: "io"
---

Registers a user-defined function which will be called by [imbue()](/cpp/io/ios_base/imbue/), [std::basic_ios::copyfmt()](/cpp/io/basic_ios/copyfmt/) and ~ios_base(). Every registered callback is called every time: the event type (a value of type [event](/cpp/io/ios_base/event/)) is passed as its first argument, and may be used to distinguish between the callers.

## Declarations
```cpp
void register_callback( event_callback function, int index );
```

## Parameters
- `function`: the function which will be called on event, supplied as a function pointer of type event_callback
- `index`: custom parameter which will be passed to the function

## Return value
(none)

## Notes
Once registered, a callback cannot be deregistered: it remains a part of the stream object for the rest of its lifetime. If the behavior of a callback needs to change, it may be controlled through [iword()](/cpp/io/ios_base/iword/) or [pword()](/cpp/io/ios_base/pword/).

If the same function is registered multiple times, it is called multiple times.

The integer value that is stored together with the callback is typically an index obtained from [xalloc()](/cpp/io/ios_base/xalloc/).

## Example
```cpp
#include <functional>
#include <iostream>
#include <locale>
 
// Cached locale-specific message and its hash
typedef std::pair<std::string, std::size_t> cache_t;
 
// Populate the cached message and its hash from the locale
void update_cache(cache_t& cache, std::locale loc)
{
    auto& fct = std::use_facet< std::messages<char> >(loc);
    std::messages_base::catalog cat = fct.open("sed", loc);
    cache.first = cat < 0 ? "" : fct.get(cat, 0, 0, "Memory exhausted");
    cache.second = std::hash<std::string>()(cache.first);
}
 
// Update the cache if the locale changed
void true_callback(std::ios_base::event evt, std::ios_base& str, int idx)
{
    if (evt == std::ios_base::imbue_event) 
    {
        cache_t* ptr = static_cast<cache_t*>(str.pword(idx));
        update_cache(*ptr, str.getloc());
    }
}
 
// Registers the cache in pword() and sets up the callback
struct CacheSetup
{
    CacheSetup(std::ostream& os, std::ios_base::event_callback f, cache_t* cache)
    {
        int index = std::ostream::xalloc();
        os.pword(index) = cache; // Store pointer to cache in the stream
        os.register_callback(f, index); // Store callback and the index to the pointer
        update_cache(*cache, os.getloc()); // Initialize cache
    };
};
 
// Some custom class 
struct S {};
// Some custom class's operator<< that needs fast access to hashed message
std::ostream& operator<<(std::ostream& os, const S&)
{
    static cache_t cache;
    static CacheSetup setup(os, true_callback, &cache);
    return os << cache.first << " : " << cache.second;
}
 
int main()
{
    std::locale loc("en_US.utf8");
 
    S s;
    std::cout.imbue(loc);
    std::cout << s << '\n';
 
    std::cout.imbue(std::locale(loc, new std::messages_byname<char>("de_DE.utf8")));
    std::cout << s << '\n';
 
    std::cout.imbue(std::locale(loc, new std::messages_byname<char>("ja_JP.utf8")));
    std::cout << s << '\n';
 
    std::cout.imbue(std::locale(loc, new std::messages_byname<char>("ru_RU.utf8")));
    std::cout << s << '\n';
}
```
