import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const styles = {
    body: {
      background: '#0f1419',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      minHeight: '100vh',
      padding: '40px 20px',
      margin: 0,
      position: 'relative' as const,
    },
    blueGlow: {
      display: 'none' as const,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative' as const,
      zIndex: 2,
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '60px',
    },
    badge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2))',
      border: '1px solid rgba(59, 130, 246, 0.5)',
      borderRadius: '30px',
      padding: '10px 20px',
      marginBottom: '20px',
      fontSize: '14px',
      fontWeight: 500,
      backdropFilter: 'blur(10px)',
    },
    badgeIcon: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      marginRight: '8px',
      verticalAlign: 'middle' as const,
    },
    h1: {
      fontSize: '56px',
      fontWeight: 700,
      marginBottom: '20px',
      lineHeight: 1.2,
      background: 'linear-gradient(135deg, #60a5fa, #93c5fd)',
      backgroundClip: 'text' as any,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    highlight: {
      background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
      backgroundClip: 'text' as any,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      fontSize: '16px',
      color: '#cbd5e1',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.8,
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      marginTop: '60px',
      borderRadius: '24px',
      padding: '40px',
      background: 'linear-gradient(135deg, rgba(15, 39, 68, 0.4), rgba(30, 58, 80, 0.4))',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      backdropFilter: 'blur(20px)',
    },
    card: (isHovered: boolean) => ({
      background: isHovered 
        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.1))'
        : 'linear-gradient(135deg, rgba(30, 58, 80, 0.6), rgba(15, 39, 68, 0.6))',
      border: isHovered 
        ? '2px solid rgba(59, 130, 246, 0.8)' 
        : '1px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '20px',
      padding: '40px 30px',
      textAlign: 'center' as const,
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
      transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
      boxShadow: isHovered 
        ? '0 20px 40px rgba(59, 130, 246, 0.2)'
        : '0 10px 20px rgba(0, 0, 0, 0.2)',
    }),
    cardIcon: {
      width: '70px',
      height: '70px',
      background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
      borderRadius: '16px',
      margin: '0 auto 25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '36px',
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    },
    cardH3: {
      fontSize: '24px',
      marginBottom: '15px',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #93c5fd, #60a5fa)',
      backgroundClip: 'text' as any,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    cardP: {
      fontSize: '14px',
      color: '#cbd5e1',
      lineHeight: 1.8,
    },
    formContainer: {
      background: 'rgba(20, 30, 48, 0.8)',
      border: '2px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '24px',
      padding: '50px 40px',
      maxWidth: '550px',
      margin: '80px auto 0',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 60px rgba(59, 130, 246, 0.1)',
    },
    datePickerContainer: {
      position: 'relative' as const,
      width: '100%',
    },
    formH2: {
      fontSize: '32px',
      marginBottom: '35px',
      textAlign: 'center' as const,
      background: 'linear-gradient(135deg, #60a5fa, #93c5fd)',
      backgroundClip: 'text' as any,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 700,
    },
    formGroup: {
      marginBottom: '28px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontSize: '14px',
      color: '#93c5fd',
      fontWeight: 600,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '12px',
      background: 'rgba(15, 39, 68, 0.5)',
      color: '#fff',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box' as const,
      fontWeight: 500,
    },
    inputFocus: {
      outline: 'none',
      borderColor: 'rgba(59, 130, 246, 0.8)',
      background: 'rgba(59, 130, 246, 0.1)',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
    },
    button: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
      marginTop: '20px',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    },
    buttonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    successMsg: {
      display: successMessage ? 'block' : 'none',
      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(74, 222, 128, 0.1))',
      border: '2px solid rgba(34, 197, 94, 0.5)',
      color: '#86efac',
      padding: '18px',
      borderRadius: '12px',
      marginTop: '25px',
      textAlign: 'center' as const,
      fontSize: '14px',
      fontWeight: 600,
      animation: 'slideIn 0.4s ease',
      backdropFilter: 'blur(10px)',
    },
    errorMsg: {
      display: errorMessage ? 'block' : 'none',
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(248, 113, 113, 0.1))',
      border: '2px solid rgba(239, 68, 68, 0.5)',
      color: '#fca5a5',
      padding: '18px',
      borderRadius: '12px',
      marginTop: '25px',
      textAlign: 'center' as const,
      fontSize: '14px',
      fontWeight: 600,
      animation: 'slideIn 0.4s ease',
      backdropFilter: 'blur(10px)',
    },
  };

  const cards = [
    {
      icon: '📅',
      title: 'Schedule Meetings',
      description: 'Easily coordinate with your team members to find the perfect time and create agenda-focused discussions.',
    },
    {
      icon: '💬',
      title: 'Active Discussion',
      description: 'Engage in real-time conversations with collaborative features that keep everyone on the same page.',
    },
    {
      icon: '✅',
      title: 'Action Items',
      description: 'Document decisions, assign tasks, and track outcomes to ensure follow-through and accountability.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !date) {
      setErrorMessage(true);
      setSuccessMessage(false);
      return;
    }

    setLoading(true);
    setErrorMessage(false);

    try {
      const response = await fetch('https://formspree.io/f/mdaanpvb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          date: date,
          message: `Selected date: ${date}`,
        }),
      });

      if (response.ok) {
        setSuccessMessage(true);
        setErrorMessage(false);
        setEmail('');
        setDate('');
        setTimeout(() => setSuccessMessage(false), 4000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(true);
      setSuccessMessage(false);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        input::placeholder {
          color: rgba(148, 163, 184, 0.6);
        }
        input::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
        .custom-datepicker {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          background: rgba(15, 39, 68, 0.5);
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          box-sizing: border-box;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .custom-datepicker:focus {
          outline: none;
          border-color: rgba(59, 130, 246, 0.8);
          background: rgba(59, 130, 246, 0.1);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
        }
        .react-datepicker {
          background-color: #1a2f4a;
          border: 1px solid rgba(59, 130, 246, 0.5);
          border-radius: 12px;
          font-family: inherit;
        }
        .react-datepicker__header {
          background-color: rgba(59, 130, 246, 0.2);
          border-bottom: 1px solid rgba(59, 130, 246, 0.3);
          color: #fff;
        }
        .react-datepicker__month {
          color: #fff;
        }
        .react-datepicker__day {
          color: #cbd5e1;
        }
        .react-datepicker__day:hover {
          background-color: rgba(59, 130, 246, 0.5);
          color: #fff;
        }
        .react-datepicker__day--selected {
          background-color: rgba(59, 130, 246, 0.8);
          color: #fff;
        }
        .react-datepicker__day--today {
          font-weight: bold;
        }
        .react-datepicker__navigation-icon::before {
          border-color: #93c5fd;
        }
        .react-datepicker__day-name {
          color: #93c5fd;
        }
      `}</style>

      <div style={styles.blueGlow}></div>

      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}></span>
            Our Meeting Process
          </div>
          <h1 style={styles.h1}>
            Collaborative Discussions
            <br />
            <span style={styles.highlight}>for Team Success</span>
          </h1>
          <p style={styles.subtitle}>
            We bring teams together to share ideas, make decisions, and drive meaningful conversations in real-time.
          </p>
        </div>

        <div style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={styles.card(hoveredCard === index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.cardIcon}>{card.icon}</div>
              <h3 style={styles.cardH3}>{card.title}</h3>
              <p style={styles.cardP}>{card.description}</p>
            </div>
          ))}
        </div>

        <div style={styles.formContainer}>
          <h2 style={styles.formH2}>Schedule & Email</h2>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => Object.assign(e.currentTarget.style, styles.inputFocus)}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.background = 'rgba(15, 39, 68, 0.5)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Select Date</label>
              <div style={styles.datePickerContainer}>
                <DatePicker
                  selected={date ? new Date(date) : null}
                  onChange={(selectedDate: Date | null) => {
                    if (selectedDate) {
                      const isoDate = selectedDate.toISOString().split('T')[0];
                      setDate(isoDate);
                    }
                  }}
                  minDate={new Date()}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Click to select a date"
                  className="custom-datepicker"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.button,
                ...(loading ? styles.buttonDisabled : {}),
              }}
              onMouseEnter={(e) => !loading && Object.assign(e.currentTarget.style, styles.buttonHover)}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
              }}
            >
              {loading ? '✨ Sending...' : '📤 Send Date via Email'}
            </button>
          </form>

          <div style={styles.successMsg}>
            ✅ Email sent successfully! Check your inbox.
          </div>

          <div style={styles.errorMsg}>
            ⚠️ Please fill in all fields correctly.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;