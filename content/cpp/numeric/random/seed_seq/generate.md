---
title: "std::seed_seq::generate"
source_path: "cpp/numeric/random/seed_seq/generate"
category: "numeric"
since: "C++11"
---

Generate unbiased seeds by filling the output range [begin,end) with 32-bit unsigned integer values, based on the (possibly biased) seeds stored in [v](/cpp/numeric/random/seed_seq/#v).

## Declarations
```cpp
template< class RandomIt >
void generate( RandomIt begin, RandomIt end );
```
_(since C++11)_

## Parameters
- `begin, end`: the iterators denoting the output range

## Notes
The generation algorithm is adapted from the initialization sequence of the Mersenne Twister generator by [Makoto Matsumoto and Takuji Nishimura](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html), incorporating the improvements made by [Mutsuo Saito in 2007](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/SFMT/M062821.pdf).

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <cstdint>
#include <iostream>
#include <random>
 
// Prototyping the main part of std::seed_seq...
struct seed_seq
{
    std::vector<std::uint32_t> v;
 
    seed_seq(std::initializer_list<std::uint32_t> const il) : v{il} {}
 
    template<typename RandomIt>
    void generate(RandomIt first, RandomIt last)
    {
        if (first == last)
            return;
        //
        // Assuming v = {1, 2, 3, 4, 5} and distance(first, last) == 10.
        //
        // Step 1: fill with 0x8b8b8b8b
        // seeds = {2341178251, 2341178251, 2341178251, 2341178251, 2341178251,
        //          2341178251, 2341178251, 2341178251, 2341178251, 2341178251}
        //
        std::fill(first, last, 0x8b8b8b8b);
        //
        // Step 2:
        // n = 10, s = 5, t = 3, p = 3, q = 6, m = 10
        //
        const std::uint32_t n = last - first;
        const std::uint32_t s = v.size();
        const std::uint32_t t = (n < 7) ? (n - 1) / 2
                              : (n < 39) ? 3
                              : (n < 68) ? 5
                              : (n < 623) ? 7
                              : 11;
        const std::uint32_t p = (n - t) / 2;
        const std::uint32_t q = p + t;
        const std::uint32_t m = std::max(s + 1, n);
        //
        // First iteration, k = 0; r1 = 1371501266, r2 = 1371501271
        //
        // seeds = {1371501271, 2341178251, 2341178251, 3712679517, 2341178251,
        //          2341178251, 3712679522, 2341178251, 2341178251, 2341178251}
        //
        // Iterations from k = 1 to k = 5 (r2 = r1 + k % n + v[k - 1])
        //
        // r1 = 2786190137, 3204727651, 4173325571, 1979226628, 401983366
        // r2 = 2786190139, 3204727655, 4173325577, 1979226636, 401983376
        //
        // seeds = {3350727907, 3188173515, 3204727655, 4173325577, 1979226636,
        //           401983376, 3591037797, 2811627722, 1652921976, 2219536532}
        //
        // Iterations from k = 6 to k = 9 (r2 = r1 + k % n)
        //
        // r1 = 2718637909, 1378394210, 2297813071, 1608643617
        // r2 = 2718637915, 1378394217, 2297813079, 1608643626
        //
        // seeds = { 434154821, 1191019290, 3237041891, 1256752498, 4277039715,
        //          2010627002, 2718637915, 1378394217, 2297813079, 1608643626}
        //
        auto begin_mod = [first, n](std::uint32_t u) -> decltype(*first)&
        {
            return first[u % n]; // i.e. begin[x] is taken modulo n
        };
        auto T = [](std::uint32_t x) { return x ^ (x >> 27); };
 
        for (std::uint32_t k = 0, r1, r2; k < m; ++k)
        {
            r1 = 1664525 * T(begin_mod(k) ^ begin_mod(k + p) ^ begin_mod(k - 1));
            r2 = (k == 0) ? r1 + s
               : (k <= s) ? r1 + k % n + v[k - 1]
               :            r1 + k % n;
            begin_mod(k + p) += r1;
            begin_mod(k + q) += r2;
            begin_mod(k) = r2;
        }
        //
        // Step 3
        // iterations from k = 10 to k = 19, using ^= to modify the output
        //
        // r1 = 1615303485, 3210438310, 893477041, 2884072672, 1918321961,
        // r2 = 1615303485, 3210438309, 893477039, 2884072669, 1918321957
        //
        // seeds = { 303093272, 3210438309,  893477039, 2884072669, 1918321957,
        //          1117182731, 1772877958, 2669970405, 3182737656, 4094066935}
        //
        // r1 =  423054846, 46783064, 3904109085, 1534123446, 1495905687
        // r2 =  423054841, 46783058, 3904109078, 1534123438, 1495905678
        //
        // seeds = { 4204997637, 4246533866, 1856049002, 1129615051, 690460811,
        //           1075771511,   46783058, 3904109078, 1534123438, 1495905678}
        //
        for (std::uint32_t k = m, r3, r4; k < m + n; ++k)
        {
            r3 = 1566083941 * T(begin_mod(k) + begin_mod(k + p) + begin_mod(k - 1));
            r4 = r3 - k % n;
            begin_mod(k+p) ^= r3;
            begin_mod(k+q) ^= r4;
            begin_mod(k) = r4;
        }
    }
};
 
int main()
{
    const auto input = std::initializer_list<std::uint32_t>{1, 2, 3, 4, 5};
    const auto output_size = 10;
 
    // using std version of seed_seq
    std::seed_seq seq(input);
    std::vector<std::uint32_t> seeds(output_size);
    seq.generate(seeds.begin(), seeds.end());
    for (const std::uint32_t n : seeds)
        std::cout << n << '\n';
 
    // using custom version of seed_seq
    seed_seq seq2(input);
    std::vector<std::uint32_t> seeds2(output_size);
    seq2.generate(seeds2.begin(), seeds2.end());
 
    assert(seeds == seeds2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2180 | C++11 | seed_seq::generate is non-throwing | it may throw exceptions |
