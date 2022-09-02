// Arithmetics -----------------------------------------------------------------

var IDENTITY       = x => x
var SUCCESSOR      = n => f => x => f(n(f)(x))
var PREDECESSOR    = n => f => x => n(g => h => h(g(f)))(_ => x)(u => u)
var ADDITION       = m => n => n(SUCCESSOR)(m)
var SUBTRACTION    = m => n => n(PREDECESSOR)(m)
var MULTIPLICATION = m => n => f => m(n(f))
var POWER          = x => y => y(x)
var ABS_DIFFERENCE = x => y => ADDITION(SUBTRACTION(x)(y))(SUBTRACTION(y)(x))

// Logic -----------------------------------------------------------------------

var TRUE  = t => f => t
var FALSE = t => f => f
var AND   = p => q => p(q)(p)
var OR    = p => q => p(p)(q)
var XOR   = p => q => p(NOT(q))(q)
var NOT   = c => c(FALSE)(TRUE)
var IF    = c => t => f => c(t)(f)

// Comparison ------------------------------------------------------------------

var IS_ZERO               = n => n(_ => FALSE)(TRUE)
var IS_LESS_THAN          = m => n => NOT(IS_LESS_THAN_EQUAL(n)(m))
var IS_LESS_THAN_EQUAL    = m => n => IS_ZERO(SUBTRACTION(m)(n))
var IS_EQUAL              = m => n => AND(IS_LESS_THAN_EQUAL(m)(n))(IS_LESS_THAN_EQUAL(n)(m))
var IS_NOT_EQUAL          = m => n => OR(NOT(IS_LESS_THAN_EQUAL(m)(n)))(NOT(IS_LESS_THAN_EQUAL(n)(m)))
var IS_GREATER_THAN_EQUAL = m => n => IS_LESS_THAN_EQUAL(n)(m)
var IS_GREATER_THAN       = m => n => NOT(IS_LESS_THAN_EQUAL(m)(n))
var IS_NULL               = p => p(x => y => FALSE)
var NIL                   = x => TRUE

// Combinators -----------------------------------------------------------------

var Y = f => (x => f(y => (x(x))(y)))(x => f(y => (x(x))(y)))

// Lists -----------------------------------------------------------------------

var CONS = x => y => f => f(x)(y)
var CAR  = p => p(TRUE)
var CDR  = p => p(FALSE)

var RANGE = m => n => Y(f => m => IF(IS_EQUAL(m)(n))
  (_ => CONS(m)(NIL))
  (_ => CONS(m)(f(SUCCESSOR(m))))
())(m)

var MAP = x => g => Y(f => x => IF(IS_NULL(x))
  (_ => x)
  (_ => CONS(g(CAR(x)))(f(CDR(x))))
())(x)

// Test "Framework" ------------------------------------------------------------

var ASSERT = truth => IF(truth)
  (description => `[\x1b[32m✓\x1b[0m] ${description}`)
  (description => `[\x1b[31m✗\x1b[0m] ${description}`)

var REFUTE = truth => ASSERT(NOT(truth))

var TEST   = description => assertion => console.log(assertion(description))

// Church Numerals -------------------------------------------------------------

var $zero  = f => IDENTITY
var $one   = SUCCESSOR($zero)
var $two   = SUCCESSOR($one)
var $three = SUCCESSOR($two)
var $four  = MULTIPLICATION($two)($two)
var $five  = SUCCESSOR($four)
var $eight = MULTIPLICATION($two)($four)
var $nine  = SUCCESSOR($eight)
var $ten   = MULTIPLICATION($two)($five)

// Tests -----------------------------------------------------------------------

TEST('TRUE')
  (ASSERT(TRUE))

TEST('FALSE')
  (REFUTE(FALSE))

TEST('AND')
  (ASSERT(AND(TRUE)(TRUE)))

TEST('OR')(ASSERT(AND
  (AND(OR(TRUE)(FALSE))(OR(FALSE)(TRUE)))
  (NOT(OR(FALSE)(FALSE)))))

TEST('XOR')(ASSERT(AND
  (AND(XOR(TRUE)(FALSE))(XOR(FALSE)(TRUE)))
  (NOT(XOR(TRUE)(TRUE)))))

TEST('NOT')
  (REFUTE(NOT(TRUE)))

TEST('IF')(ASSERT(AND
  (IF(TRUE)(TRUE)(FALSE))
  (NOT(IF(FALSE)(TRUE)(FALSE)))))

TEST('IDENTITY')
  (ASSERT(IS_EQUAL(IDENTITY)(x => x)))

TEST('SUCCESSOR')
  (ASSERT(IS_EQUAL(SUCCESSOR($zero))($one)))

TEST('PREDECESSOR')
  (ASSERT(IS_EQUAL($zero)(PREDECESSOR($one))))

TEST('ADDITION')
  (ASSERT(IS_EQUAL(SUCCESSOR($one))(ADDITION($one)($one))))

TEST('SUBTRACTION')
  (ASSERT(IS_EQUAL($zero)(SUBTRACTION($one)($one))))

TEST('MULTIPLICATION')
  (ASSERT(IS_EQUAL($four)(MULTIPLICATION($two)($two))))

TEST('POWER')(ASSERT(AND
  (IS_EQUAL($nine)(POWER($three)($two)))
  (IS_EQUAL($eight)(POWER($two)($three)))))

TEST('ABS_DIFFERENCE')(ASSERT(AND
  (IS_EQUAL($one)(ABS_DIFFERENCE($three)($two)))
  (IS_EQUAL($one)(ABS_DIFFERENCE($two)($three)))))

TEST('IS_ZERO')
  (ASSERT(IS_ZERO($zero)))

TEST('IS_LESS_THAN')
  (ASSERT(IS_LESS_THAN($zero)($one)))

TEST('IS_LESS_THAN_EQUAL')(ASSERT(AND
  (IS_LESS_THAN_EQUAL($one)($one))
  (IS_LESS_THAN_EQUAL($zero)($one))))

TEST('IS_EQUAL')(ASSERT(AND
  (IS_EQUAL($zero)($zero))
  (IS_EQUAL($one)($one))))

TEST('IS_NOT_EQUAL')
  (ASSERT(IS_NOT_EQUAL($zero)($one)))

TEST('IS_GREATER_THAN_EQUAL')(ASSERT(AND
  (IS_GREATER_THAN_EQUAL($one)($one))
  (IS_GREATER_THAN_EQUAL($one)($zero))))

TEST('IS_GREATER_THAN')
  (ASSERT(IS_GREATER_THAN($one)($zero)))

TEST('IS_NULL')
  (ASSERT(IS_NULL(NIL)))

TEST('CAR')(ASSERT(AND
  (IS_EQUAL(CAR(CONS($five)($one)))($five))
  (IS_EQUAL(CAR(CONS($two)(CONS($one)($three))))($two))))

TEST('CDR')(ASSERT(AND
  (IS_EQUAL(CDR(CONS($five)($one)))($one))
  (IS_EQUAL(CAR(CDR(CONS($two)(CONS($one)($three)))))($one))))

TEST('CONS')(ASSERT(AND
  (IS_EQUAL(CDR(CDR(CONS($two)(CONS($one)($three)))))($three))
  (IS_EQUAL(CAR(CDR(CONS($five)(CONS($two)(CONS($one)($three))))))($two))))

TEST('RANGE')(ASSERT(AND(
    AND
      (IS_EQUAL(CAR(RANGE($three)($five)))($three))
      (IS_EQUAL(CAR(CDR(RANGE($three)($five))))($four)))(
    AND
      (IS_EQUAL(CAR(CDR(CDR(RANGE($three)($five)))))($five))
      (IS_NULL(CDR(CDR(CDR(RANGE($three)($five)))))))))

TEST('MAP')(ASSERT(AND(
    AND
      (IS_EQUAL
        (CAR(MAP(RANGE($three)($five))(v => POWER(v)($two))))
        (POWER($three)($two)))
      (IS_EQUAL
        (CAR(CDR(MAP(RANGE($three)($five))(v => POWER(v)($two)))))
        (POWER($four)($two))))(
    AND
      (IS_EQUAL
        (CAR(CDR(CDR(MAP(RANGE($three)($five))(v => POWER(v)($two))))))
        (POWER($five)($two)))
      (IS_NULL(CDR(CDR(CDR(MAP(RANGE($three)($five))(v => POWER(v)($two))))))))))

// Examples --------------------------------------------------------------------

console.log('\n--- Examples ---\n')

var FACTORIAL = Y(f => n => IF(IS_ZERO(n))
  (_ => SUCCESSOR(n))
  (_ => MULTIPLICATION(n)(f(PREDECESSOR(n))))
())

var FIBONACCI = Y(f => n => IF(IS_LESS_THAN_EQUAL(n)(SUCCESSOR(f => IDENTITY)))
  (_ => n)
  (_ => ADDITION
    (f(PREDECESSOR(n)))
    (f(PREDECESSOR(PREDECESSOR(n)))))
())

TEST('FACTORIAL: 5! = 120')(ASSERT(IS_EQUAL
  (FACTORIAL($five))
  (ADDITION(MULTIPLICATION($ten)($ten))(ADDITION($ten)($ten)))))

TEST('FIBONACCI: 10 = 55')(ASSERT(IS_EQUAL
  (FIBONACCI($ten))
  (ADDITION(MULTIPLICATION($five)($ten))($five))))

/*
$ deno run lambdaCalculus.js 
[✓] TRUE
[✓] FALSE
[✓] AND
[✓] OR
[✓] XOR
[✓] NOT
[✓] IF
[✓] IDENTITY
[✓] SUCCESSOR
[✓] PREDECESSOR
[✓] ADDITION
[✓] SUBTRACTION
[✓] MULTIPLICATION
[✓] POWER
[✓] ABS_DIFFERENCE
[✓] IS_ZERO
[✓] IS_LESS_THAN
[✓] IS_LESS_THAN_EQUAL
[✓] IS_EQUAL
[✓] IS_NOT_EQUAL
[✓] IS_GREATER_THAN_EQUAL
[✓] IS_GREATER_THAN
[✓] IS_NULL
[✓] CAR
[✓] CDR
[✓] CONS
[✓] RANGE
[✓] MAP

--- Examples ---

[✓] FACTORIAL: 5! = 120
[✓] FIBONACCI: 10 = 55
*/