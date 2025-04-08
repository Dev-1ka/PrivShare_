
import { Lock, Shield, Eye, Terminal, Key, MapPin } from "lucide-react";

const features = [
  {
    name: "End-to-End Encryption",
    description:
      "Your location data is encrypted before it leaves your device, ensuring only the intended recipient can access it.",
    icon: Lock,
  },
  {
    name: "No Data Storage",
    description:
      "We never store your location on our servers. Once shared and received, it's gone forever.",
    icon: Eye,
  },
  {
    name: "Privacy First",
    description:
      "Built with privacy at its core. We prioritize your security and privacy above all else.",
    icon: Shield,
  },
  {
    name: "Share Custom Locations",
    description:
      "Share any location by entering coordinates, not just your current position.",
    icon: MapPin,
  },
  {
    name: "Decrypt Shared Locations",
    description:
      "Easily decrypt location data that has been shared with you using our secure system.",
    icon: Key,
  },
];

const SecurityFeatures = () => {
  return (
    <div className="py-12 bg-privshare-matrix-black matrix-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-mono leading-7 text-privshare-neon-green cyber-glow">
            <Terminal className="inline mr-2 h-4 w-4" />
            Secure by Design
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-privshare-neon-green sm:text-4xl font-digital cyber-glow">
            {'<'} Built for Your Privacy {'>'}
          </p>
          <p className="mt-6 text-lg leading-8 text-privshare-neon-green/60 font-mono">
            PrivShare is designed from the ground up with your privacy in mind.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 cyber-card p-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,221,0.3)] transition-all duration-300">
                <dt className="text-base font-semibold leading-7 text-privshare-neon-green font-digital">
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-black border border-privshare-neon-green/50">
                    <feature.icon className="h-6 w-6 text-privshare-neon-green" aria-hidden="true" />
                  </div>
                  <span className="cyber-glow">{feature.name}</span>
                </dt>
                <dd className="mt-2 text-base leading-7 text-privshare-neon-green/70 font-mono">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;
